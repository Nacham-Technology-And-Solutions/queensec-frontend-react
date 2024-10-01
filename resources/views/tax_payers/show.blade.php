@extends('layouts.backend')

@section('content')
<div class="content">
    <div class="block block-rounded">
        <div class="block-header block-header-default">
            <h3 class="block-title">Tax Payer Details</h3>
        </div>
        <div class="block-content">
            <p><strong>Name:</strong> {{ $taxPayer->name }}</p>
            <p><strong>Email:</strong> {{ $taxPayer->email }}</p>
            <p><strong>Phone Number:</strong> {{ $taxPayer->phone_number }}</p>
            <p><strong>Address:</strong> {{ $taxPayer->address }}</p>
            <p><strong>Tax Identification Number:</strong> {{ $taxPayer->tax_identification_number }}</p> <!-- Show TIN -->
        </div>
    </div>
</div>
@endsection
