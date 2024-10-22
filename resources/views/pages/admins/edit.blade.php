@extends('layouts.backend')

@section('css')
    <!-- Page JS Plugins CSS -->
    <link rel="stylesheet" href="assets/js/plugins/select2/css/select2.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet" />
@endsection

@section('js')
    <!-- jQuery (required for DataTables plugin) -->
    <script src="{{ asset('js/lib/jquery.min.js') }}"></script>

    <!-- Page JS Plugins -->
    <script src="assets/js/plugins/select2/js/select2.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/toastr.js"></script>
@endsection

@section('content')

    <!-- Hero -->
    <div class="bg-body-light">
        <div class="content content-full">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
                <div class="flex-grow-1">
                    <h1 class="h3 fw-bold mb-2">
                        Admin Users
                    </h1>
                    <h2 class="fs-base lh-base fw-medium text-muted mb-0">
                        Control everything concerning admin users.
                    </h2>
                </div>
                <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <a class="link-fx" href="{{ route('admins.index') }}">Admin User</a>

                        </li>

                        <li class="breadcrumb-item" aria-current="page">
                            Edit Admin User
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- END Hero -->

    <div class="content d-flex justify-content-center align-items-center">
        <div class="block block-rounded" style="width: 50%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <div class="block-header block-header-default">
                <h3 class="block-title text-center">Edit Admin User</h3>
            </div>
            <div class="block-content">
                <!-- Display Notification Update -->
                @if (session('message'))
                    <div class="alert alert-success alert-dismissible" role="alert">
                        <h3 class="alert-heading h4 my-2">Success</h3>
                        <p class="mb-0">
                            {{ session('message') }}
                        </p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif

                <!-- Display validation errors -->
                @if ($errors->any())
                    <div class="alert alert-danger alert-dismissible" role="alert">
                        <h3 class="alert-heading h4 my-2">Form Error</h3>
                        <p class="mb-0">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                        </p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif

                <form action="{{ route('admins.update', $admin->id) }}" method="POST" style="padding: 15px;">
                    @csrf
                    @method('PUT')

                    <div class="row push">

                        <div class="col-12">
                            <div class="mb-4">
                                <label class="form-label" for="first_name">First Name</label>
                                <input type="text" class="form-control" id="first_name" name="first_name"
                                    placeholder="First Name" value="{{ old('first_name', $admin->first_name) }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="middle_name">Middle Name</label>
                                <input type="text" class="form-control" id="middle_name" name="middle_name"
                                    placeholder="Middle Name" value="{{ old('middle_name', $admin->middle_name) }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="last_name">Last Name</label>
                                <input type="text" class="form-control" id="last_name" name="last_name"
                                    placeholder="Last Name" value="{{ old('last_name', $admin->last_name) }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email"
                                    value="{{ old('email', $admin->email) }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="phone">Phone Number</label>
                                <input type="phone" class="form-control" id="phone" name="phone" placeholder="Phone"
                                    value="{{ old('phone', $admin->phone) }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="username">Username</label>
                                <input type="text" class="form-control" id="username" name="username"
                                    placeholder="Username" value="{{ old('username', $admin->username) }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="account_type">Account Type</label>
                        
                                @php
                                    $acc_i = 0;
                                    $acc_list = ['Moderator', 'Customer Care', 'Admin', 'Investor'];
                                @endphp

                                <select class="form-select" id="account_type" name="account_type">
                                    @foreach ($acc_list as $locState)
                                        <option {{ $acc_i == $admin->account_type ? 'selected' : '' }}
                                            value="{{ $acc_i }}">{{ $locState }}</option>
                                        @php
                                            $acc_i++;
                                        @endphp
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection



{{-- <div class="content">
        <h2 class="content-heading">Edit Tax Payer</h2>

        <div class="block">
            <div class="block-content block-content-full">



                <form method="POST" action="{{ route('admins.update', $admin->id) }}">
                    @csrf
                    @method('PUT')

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name"
                            value="{{ old('name', $admin->name) }}" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email"
                            value="{{ old('email', $admin->email) }}" required>
                    </div>

                    <div class="form-group">
                        <label for="address">Address</label>
                        <textarea class="form-control" id="address" name="address">{{ old('address', $admin->addressToLineString()) }}</textarea>
                    </div>

                    <div class="form-group">
                        <label for="phone_number">Phone Number</label>
                        <input type="text" class="form-control" id="phone_number" name="phone_number"
                            value="{{ old('phone_number', $admin->phone_number) }}">
                    </div>

                    <div class="form-group">
                        <label for="tax_identification_number">Tax Identification Number</label>
                        <input type="text" class="form-control" id="tax_identification_number"
                            name="tax_identification_number"
                            value="{{ old('tax_identification_number', $admin->tax_identification_number) }}" required>
                    </div>

                    <div class="form-group">
                        <label for="status">Status</label>
                        <select class="form-control" id="status" name="status" required>
                            <option value="active" {{ $admin->status == 'active' ? 'selected' : '' }}>Active</option>
                            <option value="disabled" {{ $admin->status == 'disabled' ? 'selected' : '' }}>Disabled
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Update Tax Payer</button>
                    </div>
                </form>
            </div>
        </div>
    </div> --}}
