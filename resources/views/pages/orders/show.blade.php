@extends('layouts.backend')

@section('content')
    <div class="content">
        <!-- Quick Actions -->
        {{-- <div class="row">
            <div class="col-6">
                <a class="block block-rounded block-link-shadow text-center" href="{{ route('orders.edit', $order->id) }}">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">
                            <i class="fa fa-pencil-alt"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Edit Order
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <form name="xdfx" action="{{ route('orders.destroy', $order->id) }}" method="POST"
                    style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <a onclick="document.xdfx.submit();" href="javascript:void(0)"
                        class="block block-rounded block-link-shadow text-center">
                        <div class="block-content block-content-full">
                            <div class="fs-2 fw-semibold text-danger">
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                        <div class="block-content py-2 bg-body-light">
                            <p class="fw-medium fs-sm text-danger mb-0">
                                Remove Order
                            </p>
                        </div>
                    </a>
                </form>
            </div>
        </div> --}}
        <!-- END Quick Actions -->

        <!-- User Info -->
        <div class="block block-rounded">
            <div class="block-content text-center">
                <div class="py-4">
                    <div class="mb-3">
                        <img class="img-avatar" src="{{ asset($order->payee()->image_url) }}" alt="">
                    </div>
                    <h1 class="fs-lg mb-0">
                        <span>{{ $order->name }}</span>
                    </h1>
                    <p class="fs-sm fw-medium text-muted">{{ $order->payee()->name() }}<br>
                        {{ $order->payee()->userType() }} Account</p>
                </div>
            </div>
            {{-- <div class="block-content bg-body-light text-center">
                <div class="row items-push text-uppercase">
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payer</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($order->orders()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payee</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">₦{{ count($order->tickets()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Mineral</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($order->orders()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payments</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($order->payments()) }}</a>
                    </div>
                </div>
            </div> --}}
        </div>
        <!-- END User Info -->

        <!-- Quick Overview -->
        <div class="row">
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-info-light mx-auto">
                            <i class="fa fa-barcode text-info"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-info mb-0">
                            Order #{{ $order->id }}
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-info-light mx-auto">
                            <i class="fa fa-car text-info"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-info mb-0">
                            Hauler #{{ $order->hauler()->id }}
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-warning-light mx-auto">
                            <i class="fa fa-dollar text-warning"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-warning mb-0">
                            {{ $order->payment_type }} Payment
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href=" javascript:void(0) ">
                    {{-- href="{{ $order->ticketIssued() ? route('tickets.show') : 'javascript:void(0)' }}"> --}}
                    <div class="block-content block-content-full">
                        <div class="item item-circle   {{ $order->ticketIssued() ? 'bg-success-light' : 'bg-body' }} mx-auto">
                            <i class="fa fa-ticket  {{ $order->ticketIssued() ? 'text-success' : 'text-muted' }}"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm mb-0 {{ $order->ticketIssued() ? 'text-success' : 'text-muted' }}">
                            {{ $order->ticketIssued() ? 'Ticket #' . $order->ticket()->id : 'Ticket Not Issued' }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <!-- END Quick Overview -->

        <!-- Products -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">Payments</h3>
            </div>
            <div class="block-content">
                <div class="table-responsive">
                    <table class="table table-borderless table-striped table-vcenter fs-sm">
                        <thead>
                            <tr>
                                <th class="text-center" style="width: 100px;">ID</th>
                                <th>Payer Name</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Date</th>
                                {{-- <th class="text-end" style="width: 10%;">UNIT COST</th> --}}
                                <th class="text-end" style="width: 10%;">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($order->payments() as $payment)
                                <tr>
                                    <td class="text-center"><a
                                            href="{{ route('payments.show', $payment->id) }}"><strong>#{{ $payment->id }}</strong></a>
                                    </td>
                                    <td><a
                                            href="{{ route('users.show', $payment->payer()->id) }}">{{ $payment->payer()->name() }}</a>
                                    </td>
                                    <td class="text-center">{{ $payment->status }}</td>
                                    <td class="text-center">
                                        <strong>{{ date('d/m/Y', strtotime($order->created_at)) }}</strong>
                                    </td>
                                    {{-- <td class="text-end">$59,00</td> --}}
                                    <td class="text-end">₦{{ $payment->amount }}</td>
                                </tr>
                            @endforeach
                            <tr>
                                <td colspan="4" class="text-end"><strong>Total Price:</strong></td>
                                <td class="text-end">₦{{ number_format($order->total_amount, 2, '.', ',') }}</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="text-end"><strong>Total Paid:</strong></td>
                                <td class="text-end">₦{{ number_format($order->paid(), 2, '.', ',') }}</td>
                            </tr>
                            <tr class="table-success">
                                <td colspan="4" class="text-end text-uppercase"><strong>Total Due:</strong></td>
                                <td class="text-end"><strong>₦{{ number_format($order->balance(), 2, '.', ',') }}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- END Products -->

        <!-- Customer -->
        {{-- <div class="row">
            <div class="col-sm-6">
                <!-- Billing Address -->
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Billing Address</h3>
                    </div>
                    <div class="block-content">
                        <div class="fs-4 mb-1">John Parker</div>
                        <address class="fs-sm">
                            Sunset Str 598<br>
                            Melbourne<br>
                            Australia, 11-671<br><br>
                            <i class="fa fa-phone"></i> (999) 888-77777<br>
                            <i class="fa fa-envelope-o"></i> <a href="javascript:void(0)">company@example.com</a>
                        </address>
                    </div>
                </div>
                <!-- END Billing Address -->
            </div>
            <div class="col-sm-6">
                <!-- Shipping Address -->
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Shipping Address</h3>
                    </div>
                    <div class="block-content">
                        <div class="fs-4 mb-1">John Parker</div>
                        <address class="fs-sm">
                            Sunrise Str 620<br>
                            Melbourne<br>
                            Australia, 11-587<br><br>
                            <i class="fa fa-phone"></i> (999) 888-55555<br>
                            <i class="fa fa-envelope-o"></i> <a href="javascript:void(0)">company@example.com</a>
                        </address>
                    </div>
                </div>
                <!-- END Shipping Address -->
            </div>
        </div> --}}
        <!-- END Customer -->

        <!-- Log Messages -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">Order Log</h3>
            </div>
            <div class="block-content">
                <table class="table table-borderless table-striped table-vcenter fs-sm">
                    <tbody>
                        @foreach ($order->histories() as $history)
                            <tr>
                                @php
                                    $logType = 'bg-primary';
                                    if ($history->action) {
                                        # code...
                                    }
                                @endphp
                                <td class="fs-base" style="width: 80px;">
                                    <span class="badge bg-primary">{{ $history->action }}</span>
                                </td>
                                <td style="width: 220px;">
                                    <span
                                        class="fw-semibold">{{ date('d/m/Y - h:m', strtotime($history->created_at)) }}</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)">{{ $history->changedBy()->name() }}</a>
                                </td>
                                <td class="text-">{{ $history->status }}</td>
                            </tr>
                        @endforeach

                        {{-- <tr>
                            <td class="fs-base">
                                <span class="badge bg-primary">Order</span>
                            </td>
                            <td>
                                <span class="fw-semibold">January 17, 2020 - 17:36</span>
                            </td>
                            <td>
                                <a href="javascript:void(0)">Support</a>
                            </td>
                            <td class="text-warning">Preparing Order</td>
                        </tr>
                        <tr>
                            <td class="fs-base">
                                <span class="badge bg-success">Payment</span>
                            </td>
                            <td>
                                <span class="fw-semibold">January 16, 2020 - 18:10</span>
                            </td>
                            <td>
                                <a href="javascript:void(0)">John Parker</a>
                            </td>
                            <td class="text-success">Payment Completed</td>
                        </tr>
                        <tr>
                            <td class="fs-base">
                                <span class="badge bg-danger">Email</span>
                            </td>
                            <td>
                                <span class="fw-semibold">January 16, 2020 - 10:35</span>
                            </td>
                            <td>
                                <a href="javascript:void(0)">Support</a>
                            </td>
                            <td class="text-danger">Missing payment details. Email was sent and awaiting for payment before
                                processing</td>
                        </tr>
                        <tr>
                            <td class="fs-base">
                                <span class="badge bg-primary">Order</span>
                            </td>
                            <td>
                                <span class="fw-semibold">January 15, 2020 - 14:59</span>
                            </td>
                            <td>
                                <a href="javascript:void(0)">Support</a>
                            </td>
                            <td>All products are available</td>
                        </tr>
                        <tr>
                            <td class="fs-base">
                                <span class="badge bg-primary">Order</span>
                            </td>
                            <td>
                                <span class="fw-semibold">January 15, 2020 - 14:29</span>
                            </td>
                            <td>
                                <a href="javascript:void(0)">John Parker</a>
                            </td>
                            <td>Order Submitted</td>
                        </tr> --}}
                    </tbody>
                </table>
            </div>
        </div>
        <!-- END Log Messages -->

    </div>
    <!-- END Page Content -->
@endsection
