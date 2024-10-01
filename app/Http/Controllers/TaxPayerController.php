<?php

namespace App\Http\Controllers;

use App\Models\TaxPayer;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class TaxPayerController extends Controller
{
    // List all tax payer accounts
    public function index()
    {
        $taxPayers = TaxPayer::all();
        return view('tax_payers.index', compact('taxPayers'));
    }

    // Show the form for creating a new tax payer account
    public function create()
    {
        return view('tax_payers.create');
    }

    // Store a newly created tax payer account in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:tax_payers',
            'address' => 'nullable|string',
            'phone_number' => 'required|string|max:20',
        ]);
 $taxId = 'TAX-' . strtoupper(Str::random(8));
 while (TaxPayer::where('tax_identification_number', $taxId)->exists()) {
    $taxId = 'TAX-' . strtoupper(Str::random(8));
}
$taxPayer = TaxPayer::create([
    'name' => $request->input('name'),
    'email' => $request->input('email'),
    'phone_number' => $request->input('phone_number'), // Correct field
    'address' => $request->input('address'),
    'tax_identification_number' => $taxId, // Assuming this is generated earlier
]);


return redirect()->route('tax_payers.index')->with('success', 'Tax Payer created successfully!');
 
$request->validate([
    'email' => 'required|email|unique:tax_payers,email',
], [
    'email.unique' => 'This email address is already in use. Please use a different email.',
]);

       
        return redirect()->route('tax_payers.index')->with('success', 'Tax Payer created successfully.');
    }

    // Show the form for editing the specified tax payer account
    public function edit($id)
    {
        $taxPayer = TaxPayer::findOrFail($id);
        return view('tax_payers.edit', compact('taxPayer'));
    }

    // Update the specified tax payer account in the database
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:tax_payers,email,' . $id,
            // add other validation rules as necessary
        ]);

        $taxPayer = TaxPayer::findOrFail($id);
        $taxPayer->update($request->all());

        return redirect()->route('tax_payers.index')->with('success', 'Tax Payer Account updated successfully.');
    }

    // Disable the specified tax payer account
    // public function disable($id)
    // {
    //     $taxPayer = TaxPayer::findOrFail($id);
    //     $taxPayer->update(['status' => 'disabled']); // assuming there is a 'status' column

    //     return redirect()->route('tax_payers.index')->with('success', 'Tax Payer Account disabled successfully.');
    // }

    // Delete the specified tax payer account
    public function destroy($id)
    {
        $taxPayer = TaxPayer::findOrFail($id);
        $taxPayer->delete();

        return redirect()->route('tax_payers.index')->with('success', 'Tax Payer Account deleted successfully.');
    }

    // Quick Actions (Payment History, Reports, Tickets)
    public function quickActions($id)
    {
        $taxPayer = TaxPayer::findOrFail($id);
        // Fetch payment history, reports, and tickets related to the tax payer
        $paymentHistory = []; // replace with actual data fetching
        $reports = []; // replace with actual data fetching
        $tickets = []; // replace with actual data fetching

        return view('tax_payers.quick_actions', compact('taxPayer', 'paymentHistory', 'reports', 'tickets'));
    }
    public function disable($id)
{
    $taxPayer = TaxPayer::findOrFail($id);
    $taxPayer->status = 'disabled';
    $taxPayer->save();

    return redirect()->route('tax_payers.index')->with('success', 'Tax Payer disabled successfully.');
}

public function enable($id)
{
    $taxPayer = TaxPayer::findOrFail($id);
    $taxPayer->status = 'active';
    $taxPayer->save();

    return redirect()->route('tax_payers.index')->with('success', 'Tax Payer enabled successfully.');
}
public function show($id)
{
    $taxPayer = TaxPayer::findOrFail($id);
    return view('tax_payers.show', compact('taxPayer'));
    $taxPayer = TaxPayer::findOrFail($id); // Retrieve the tax payer by their ID

    return view('tax_payers.show', compact('taxPayer'));
}

}