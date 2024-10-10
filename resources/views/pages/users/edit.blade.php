@extends('layouts.backend')

@section('content')
<div class="content">
    <h2 class="content-heading">Edit Tax Payer</h2>

    <div class="block">
        <div class="block-content block-content-full">
            <form method="POST" action="{{ route('tax-payers.update', $taxPayer->id) }}">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value="{{ old('name', $taxPayer->name) }}" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" value="{{ old('email', $taxPayer->email) }}" required>
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <textarea class="form-control" id="address" name="address">{{ old('address', $taxPayer->address) }}</textarea>
                </div>

                <div class="form-group">
                    <label for="phone_number">Phone Number</label>
                    <input type="text" class="form-control" id="phone_number" name="phone_number" value="{{ old('phone_number', $taxPayer->phone_number) }}">
                </div>

                <div class="form-group">
                    <label for="tax_identification_number">Tax Identification Number</label>
                    <input type="text" class="form-control" id="tax_identification_number" name="tax_identification_number" value="{{ old('tax_identification_number', $taxPayer->tax_identification_number) }}" required>
                </div>

                <div class="form-group">
                    <label for="status">Status</label>
                    <select class="form-control" id="status" name="status" required>
                        <option value="active" {{ $taxPayer->status == 'active' ? 'selected' : '' }}>Active</option>
                        <option value="disabled" {{ $taxPayer->status == 'disabled' ? 'selected' : '' }}>Disabled</option>
                    </select>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Update Tax Payer</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
