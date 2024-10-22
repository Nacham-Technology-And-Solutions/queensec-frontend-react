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
                        Locations
                    </h1>
                    <h2 class="fs-base lh-base fw-medium text-muted mb-0">
                        Register new Locality.
                    </h2>
                </div>
                <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <a class="link-fx" href="{{ route('locations.index') }}">Location</a>

                        </li>

                        <li class="breadcrumb-item" aria-current="page">
                            Register Locality
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
                <h3 class="block-title text-center">Register Locality</h3>
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

                <!-- Display Notification Update -->
                @if (session('error'))
                    <div class="alert alert-danger alert-dismissible" role="alert">
                        <h3 class="alert-heading h4 my-2">Failed</h3>
                        <p class="mb-0">
                            {{ session('error') }}
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

                <form action="{{ route('locations.store') }}" method="POST" style="padding: 15px;">
                    @csrf
                    <input type="text" name="locType" value="locality" hidden>

                    <div class="row push">
                        <div class="col-12">
                            <div class="mb-4">
                                <label class="form-label" for="loc_state_id">State</label>
                                <select class="form-select" id="loc_state_id" name="loc_state_id">
                                    @foreach ($locStates as $locState)
                                        <option value="{{ $locState->id }}" {{ $locState->id == $selectedState ? 'selected' : '' }}>{{ $locState->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="loc_locality_name">Name</label>
                                <input type="text" class="form-control" id="loc_locality_name" name="loc_locality_name"
                                    placeholder="Locality Name" value="{{ old('loc_locality_name') }}">
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="loc_locality_code">Code</label>
                                <input type="text" class="form-control" id="loc_locality_code" name="loc_locality_code"
                                    placeholder="Locality Code" value="{{ old('loc_locality_code') }}">
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
