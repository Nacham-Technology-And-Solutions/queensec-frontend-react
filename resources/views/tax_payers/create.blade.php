@extends('layouts.backend')

@section('content')
<div class="content d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="block block-rounded" style="width: 50%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
        <div class="block-header block-header-default">
            <h3 class="block-title text-center">Create Tax Payer</h3>
        </div>
        <div class="block-content">
            <!-- Display validation errors -->
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            
            <form action="{{ route('tax_payers.store') }}" method="POST" style="padding: 15px;"> 
                @csrf
                <div class="form-group text-center">
                    <label for="name">Name</label>
                    <input type="text" class="form-control mx-auto" id="name" name="name" placeholder="Enter name" style="width: 80%;">
                </div>
                <div class="form-group text-center">
                    <label for="email">Email</label>
                    <input type="email" class="form-control mx-auto" id="email" name="email" placeholder="Enter email" style="width: 80%;">
                </div>
                <div class="form-group text-center">
                    <label for="address">Address</label>
                    <textarea class="form-control mx-auto" id="address" name="address" rows="3" placeholder="Enter address" style="width: 80%;"></textarea>
                </div>
                <div class="form-group text-center">
                    <label for="phone_number">Phone Number</label>
                    <input type="text" class="form-control mx-auto" id="phone_number" name="phone_number" placeholder="Enter phone number" style="width: 80%;">
                </div>
                
                <div class="text-center">
                    <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>


@endsection
