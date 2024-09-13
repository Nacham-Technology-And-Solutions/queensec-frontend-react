<!-- resources/views/tax_payers/show.blade.php -->

@extends('layouts.backend')

@section('content')
    <div class="content">
        <h2 class="content-heading">Tax Payer Details</h2>

        <div class="block">
            <div class="block-content block-content-full">
                <div class="form-group">
                    <label>Name:</label>
                    <p>{{ $taxPayer->name }}</p>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <p>{{ $taxPayer->email }}</p>
                </div>
                <div class="form-group">
                    <label>Address:</label>
                    <p>{{ $taxPayer->address }}</p>
                </div>
                <div class="form-group">
                    <label>Phone Number:</label>
                    <p>{{ $taxPayer->phone_number }}</p>
                </div>
                <div class="form-group">
                    <label>TIN:</label>
                    <p>{{ $taxPayer->tax_identification_number }}</p>
                </div>
                <div class="form-group">
                    <label>Status:</label>
                    <p>{{ ucfirst($taxPayer->status) }}</p>
                </div>
            </div>
        </div>
    </div>
@endsection
