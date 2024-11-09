<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use App\Models\TaxTicket;
use Carbon\Carbon;
use Flutterwave\Service\Transactions;
use Flutterwave\Rave;
use Illuminate\Container\Attributes\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use PHPUnit\Framework\Attributes\Ticket;

class PaymentsController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = Payment::latest()->filter(request(['search', 'status', 'payment_type']))->paginate(20);


        // Today
        $todayRecords = Payment::whereDate('created_at', Carbon::today())->count();

        // Yesterday
        $yesterdayRecords = Payment::whereDate('created_at', Carbon::yesterday())->count();

        // This Month
        $thisMonthRecords = Payment::whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()])->count();

        $states = [
            'pending' => Payment::where('status', 'pending')->count(),
            'completed' => Payment::where('status', 'completed')->count(),
            'cancelled' => Payment::where('status', 'cancelled')->count(),
            // 'full' => Payment::where('payment_type', 'full')->count(),
            // 'installment' => Payment::where('payment_type', 'installment')->count(),
            'all' => Payment::all()->count(),
            'today' => $todayRecords,
            'yesterday' => $yesterdayRecords,
            'month' => $thisMonthRecords
        ];

        return view(
            'pages.payments.index',
            [
                'payments' => $payments,
                'states' => $states
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $payment = Payment::create($form_field);

        return back()->with('message', 'Payment Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $payment = Payment::find($id);

        return view(
            'pages.payments.show',
            [
                'payment' => $payment,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $payment = Payment::find($id);

        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $payment->update($form_field);

        return back()->with('message', 'Payment Updated Successfully');
    }


    public function webhook(Request $request)
    {
        $payload = $request->all();

        if ($payload['event'] === 'charge.completed' && $payload['data']['status'] === 'successful') {
            // Handle successful payment notification
            // e.g., update the payment status in the database
            $payitem = Payment::where("tx_ref", "=", $payload['data']['tx_ref']);

            if ($payitem->status != 'successful') {
                $payitem->flw_payload = $payload;
                $payitem->update(
                    [
                        'status' => 'successful',
                        'flw_payload' => $payload,
                    ]
                );
            }
        }

        // If you specified a secret hash, check for the signature
        $secretHash = config('services.flutterwave.secret_hash');
        $signature = $request->header('verif-hash');
        if (!$signature || ($signature !== $secretHash)) {
            // This request isn't from Flutterwave; discard
            abort(401);
        }
        $payload = $request->all();
        // It's a good idea to log all received events.
        // Log::info($payload);
        // Do something (that doesn't take too long) with the payload
        return response(200);

        // return response()->json(['status' => 'success']);
    }


    public function verifyTransaction(Request $request, Payment $payment)
    {
        $transactions = new Transactions();
        $response = $transactions->verifyWithTxref($payment->tx_ref);
        if (
            $response['data']['status'] === "successful"
            && $response['data']['amount'] === $payment->amount //$expectedAmount
            && $response['data']['currency'] === "NGN"
        ) { //$expectedCurrency) {
            // Success! Confirm the customer's payment
            // $payment->state
        } else {
            // Inform the customer their payment was unsuccessful
        }
    }

    public function placeOrder(Request $request)
    {
        /// Create A New Order
        $orderData =  $request->validate([
            'payer_id' => ['required', 'int'],
            'payee_id' => ['required', 'int'],
            'payee_hauler_id' => ['required', 'int'],
            'mineral_id' => ['required', 'int'],
            'total_amount' => ['required', 'decimal:0,2'],
        ]);
        $orderData['status'] = 'pending';

        $newOrder = Order::create($orderData);

        return response(
            [
                'success' => true,
                'message' => 'Order Created',
                'data' => $newOrder
            ],
            201
        );
    }


    public static function updateOrder(Order $order)
    {
        if ($order->balance() == 0) {
            $order->update([
                'status' => 'completed'
            ]);

            // Then Issue Ticket
            $order->IssueTicket();
        } else {
            // Still Waiting for payement.
            return;
        }

        // If payment attempt on an order is upto two close the order
        if ($order->paymentsFailed() > 5) {
            $order->update([
                'status' => 'cancelled'
            ]);
        }
    }

    public static function verifyTransactionWithTxRef(String $tx_ref)
    {
        // Flutterwave API endpoint
        $url = "https://api.flutterwave.com/v3/transactions/verify_by_reference";

        // Send GET request with the transaction reference and secret key
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('FLUTTERWAVE_SECRET_KEY'),
        ])->get($url, [
            'tx_ref' => $tx_ref
        ]);

        // Check if the request was successful
        if ($response->successful()) {
            // Handle the response, e.g., display data or store it in your database
            $data = $response->json();
            return $data;
        } else {
            // Handle error
            return false;
        }
    }


    public function updatePaymentStatus(Request $request)
    {
        /// Create A New Payment
        $paymentData =  $request->validate([
            'order_id' => ['required', 'string'],
            'transaction_id' => ['required', 'string'],
            'tx_ref' => ['required', 'string'],
            'flw_ref' => ['string'],
            'amount' => ['required', 'decimal:0,2'],
            'customer' => ['required'],
            'status' => ['string'],
        ]);

        $order = Order::find($paymentData['order_id']);
        $paymentData['currency'] = 'NGN';

        /// Verify Payment
        $response =  $this::verifyTransactionWithTxRef($paymentData['tx_ref']);
        // dd($response['data']);

        if ($response['data']) {
            // create a payment record in the data base based on the response from Flutter Wave
            // But first check if a payment record exists in the database with the tx_ref
            $oldPayment = Payment::where('tx_ref', '=', $paymentData['tx_ref'])->get()->first();

            // dd($oldPayment);
            if (!$oldPayment) {
                $paymentDataFromFW = [
                    'order_id' => $order->id,
                    'payer_id' => $order->payer()->id,
                    'payee_id' => $order->payee()->id,

                    'transaction_id' => $response['data']['id'],
                    'tx_ref' => $response['data']['tx_ref'],
                    'flw_ref' => $response['data']['flw_ref'],
                    'amount' => $response['data']['amount'],
                    'currency' => $response['data']['currency'],
                    'charged_amount' => $response['data']['charged_amount'],
                    'app_fee' => $response['data']['app_fee'],
                    'merchant_fee' => $response['data']['merchant_fee'],
                    'processor_response' => $response['data']['processor_response'],
                    'status' => $response['data']['status'],
                    'payment_type' => $response['data']['payment_type'],
                    'account_id' => $response['data']['account_id'],
                    'card' => json_encode($response['data']['card']), // Convert to JSON
                    'amount_settled' => $response['data']['amount_settled'],
                    'customer' => json_encode($response['data']['customer']), // Convert to JSON
                    'payment_date' => Carbon::parse($response['data']['created_at']),
                    'created_at' => now(),
                    'updated_at' => now()
                ];

                $newPayment = Payment::create($paymentDataFromFW);
            } else {
                $paymentDataFromFW = [
                    'amount' => $response['data']['amount'],
                    'currency' => $response['data']['currency'],
                    'charged_amount' => $response['data']['charged_amount'],
                    'app_fee' => $response['data']['app_fee'],
                    'merchant_fee' => $response['data']['merchant_fee'],
                    'processor_response' => $response['data']['processor_response'],
                    'status' => $response['data']['status'],
                    'payment_type' => $response['data']['payment_type'],
                    'account_id' => $response['data']['account_id'],
                    'card' => json_encode($response['data']['card']), // Convert to JSON
                    'amount_settled' => $response['data']['amount_settled'],
                    'customer' => json_encode($response['data']['customer']), // Convert to JSON
                    'payment_date' => Carbon::parse($response['data']['created_at']),
                ];

                $oldPayment->update([$response['data']]);
            }

            $paymentState = $oldPayment ?? $newPayment;
            // dd($paymentState->status, $paymentState->amount, $paymentState->currency, "successful", ($paymentData['amount'].""), $paymentData['currency']);
            if (
                $paymentState->status === "successful"
                && $paymentState->amount  === ($paymentData['amount']."") //$expectedAmount
                && $paymentState->currency === $paymentData['currency']
            ) { 
                $this::updateOrder($order);
            }
        }

        return response(
            [
                'success' => true,
                'message' => 'Payment Updated',
                'data' => $paymentState
            ],
            200
        );
    }
    // public function updatePaymentStatus(Request $request)
    // {
    //     /// Create A New Payment
    //     $paymentData =  $request->validate([
    //         'order_id' => ['required', 'string'],
    //         'transaction_id' => ['required', 'string'],
    //         'tx_ref' => ['required', 'string'],
    //         'flw_ref' => ['string'],
    //         'amount' => ['required', 'decimal:0,2'],
    //         'customer' => ['required'],
    //         'status' => ['string'],
    //     ]);

    //     $paymentData['currency'] = 'NGN';

    //     /// Verify Payment
    //     $transactions = new Transactions();
    //     $response = $transactions->verifyWithTxref($paymentData['tx_ref']);

    //     if ($response['data']) {
    //         // create a payment record in the data base based on the response from Flutter Wave
    //         // But first check if a payment record exists in the database with the tx_ref
    //         $oldPayment = Payment::where('tx_ref', '=', $paymentData['tx_ref']);
    //         if (!$oldPayment) {
    //             $newPayment = Payment::create($response['data']);
    //         } else {
    //             $oldPayment->update([$response['data']]);
    //         }

    //         $paymentState = $oldPayment ?? $newPayment;

    //         if (
    //             $paymentState->status === "successful"
    //             && $paymentState->amount  === $paymentData['amount'] //$expectedAmount
    //             && $paymentState->currency === $paymentData['currency']
    //         ) {
    //             $order = Order::find($paymentData['order_id']);
    //             $this::updateOrder($order);
    //         }
    //     }

    //     return response(
    //         [
    //             'success' => true,
    //             'message' => 'Payment Updated',
    //             'data' => $paymentState
    //         ],
    //         200
    //     );
    // }

    public function getTicket(Request $request)
    {
        /// Get Ticket
        $ticketData =  $request->validate([
            'order_id' => ['required', 'string'],
        ]);

        $ticket = TaxTicket::where('order_id', '=', $ticketData['order_id']);

        if ($ticket) {
            return response(
                [
                    'success' => true,
                    'message' => 'Ticket Retrieved',
                    'data' => $ticket->get()->first()
                ],
                200
            );
        } else {
            return response(
                [
                    'success' => true,
                    'message' => 'No ticket issued for this order yet.',
                    'data' => null
                ],
                200
            );
        }
    }


    /// Usage
    // Place and Order, placeOrder();
    // Make Payment, makeAndConfirmPayment();
    // Issue Ticket, getTicket();

    // If a payment fails leave the order open to retry another payment.
    // If it fails twice close it.
}
