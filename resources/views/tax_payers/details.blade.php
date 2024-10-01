@extends('layouts.backend')

@section('content')
<div class="content">
    <div class="block block-rounded">
        <div class="block-header block-header-default">
            <h3 class="block-title">Tax Payer Details</h3>
        </div>
        <div class="block-content">
            <div class="form-group">
                <label for="name">Name</label>
                <p>{{ $taxPayer->name }}</p>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <p>{{ $taxPayer->email }}</p>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <p>{{ $taxPayer->address }}</p>
            </div>
            <div class="form-group">
                <label for="phone_number">Phone Number</label>
                <p>{{ $taxPayer->phone_number }}</p>
            </div>
            <div class="form-group">
                <label for="tax_identification_number">Tax Identification Number</label>
                <p>{{ $taxPayer->tax_identification_number }}</p>
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <p>{{ $taxPayer->status == 'active' ? 'Active' : 'Disabled' }}</p>
            </div>
            <div class="form-group">
                <label for="created_at">Created At</label>
                <p>{{ $taxPayer->created_at->format('Y-m-d H:i:s') }}</p>
            </div>
            <div class="form-group">
                <label for="updated_at">Last Updated</label>
                <p>{{ $taxPayer->updated_at->format('Y-m-d H:i:s') }}</p>
            </div>
            <a href="{{ route('tax_payers.edit', $taxPayer->id) }}" class="btn btn-primary">Edit</a>
            <form action="{{ route('tax_payers.destroy', $taxPayer->id) }}" method="POST" style="display:inline-block;">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger">Delete</button>
            </form>
            <a href="{{ route('tax_payers.index') }}" class="btn btn-secondary">Back to List</a>
        </div>
    </div>
</div>
@endsection
