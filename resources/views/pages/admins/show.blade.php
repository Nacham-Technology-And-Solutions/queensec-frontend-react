@extends('layouts.backend')

@section('content')
    <div class="content">
        <!-- Quick Actions -->
        <div class="row">
            <div class="col-6">
                <a class="block block-rounded block-link-shadow text-center" href="{{ route('admins.edit', $admin->id) }}">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">
                            <i class="fa fa-pencil-alt"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Edit Admin User
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <form name="xdfx" action="{{ route('admins.destroy', $admin->id) }}" method="POST"
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
                                Remove Admin User
                            </p>
                        </div>
                    </a>
                </form>
            </div>
        </div>
        <!-- END Quick Actions -->

        <!-- User Info -->
        <div class="block block-rounded">
            <div class="block-content text-center">
                <div class="py-4">
                    <div class="mb-3">
                        <img class="img-avatar" src="{{ asset($admin->image_url) }}" alt="">
                    </div>
                    <h1 class="fs-lg mb-0">
                        <span>{{ $admin->name() }}</span>
                    </h1>
                    <p class="fs-sm fw-medium text-muted">{{ $admin->userType() }} Account</p>
                </div>
            </div>
            {{-- <div class="block-content bg-body-light text-center">
                <div class="row items-push text-uppercase">
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Orders</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($admin->tickets()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Orders Value</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">₦{{ count($admin->tickets()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Haulers</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($admin->haulers()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payments</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($admin->payments()) }}</a>
                    </div>
                </div>
            </div> --}}
        </div>
        <!-- END User Info -->

        <!-- Addresses -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">Basic Data</h3>
            </div>
            <div class="block-content">
                <div class="row">
                    <div class="col-lg-6">
                        <!-- Data -->
                        <div class="block block-rounded block-bordered">
                            <div class="block-header border-bottom">
                                <h3 class="block-title">Data</h3>
                            </div>
                            <div class="block-content">
                                <div class="fs-4 mb-1">{{ $admin->business_name }}</div>
                                <p class="fs-sm">
                                    First Name : {{ $admin->first_name }}<br>
                                    Middle Name : {{ $admin->middle_name }}<br>
                                    Last Name : {{ $admin->last_name }}<br>
                                    Username : {{ $admin->username }}<br> 

                                    Email : {{ $admin->email }}<br>
                                    Phone Number : {{ $admin->phone }}<br>  
                                </p>
                            </div>
                        </div>
                        <!-- END Data -->
                    </div>
                    {{-- <div class="col-lg-6">
                        <!-- Address -->
                        <div class="block block-rounded block-bordered">
                            <div class="block-header border-bottom">
                                <h3 class="block-title">Address</h3>
                            </div>
                            <div class="block-content">
                                <div class="fs-4 mb-1">{{ $admin->business_name }}</div>
                                <address class="fs-sm">
                                    @if ($admin->address())
                                        {{ $admin->address()->line_address }}<br>
                                        {{ $admin->address()->city }}<br>
                                        {{ $admin->address()->state }}<br>
                                        Nigeria.<br><br>
                                    @else
                                        No Address Yet.<br><br>
                                    @endif
                                    <i class="fa fa-phone"></i> (+234) {{ $admin->phone }}<br>
                                    <i class="fa fa-envelope-o"></i> <a href="javascript:void(0)">company@example.com</a>
                                </address>
                            </div>
                        </div>
                        <!-- END Address -->
                    </div> --}}
                </div>
            </div>
        </div>
        <!-- END Addresses -->

        <!-- Dynamic Table Full - Payments -->
        {{-- <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">
                    Payments, <small>All Payments, both full and partials.</small>
                </h3>

            </div>
            <div class="block-content block-content-full">
                <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/tables_datatables.js -->
                <table class="table table-bordered table-striped table-vcenter js-dataTable-full fs-sm">
                    <thead>
                        <tr>
                            <th class="text-center" style="width: 80px;">#</th>
                            <th class="text-center" style="width: 80px;">Order #</th>
                            <th >Mineral</th>
                            <th >Payer</th>
                            <th class="d-none d-sm-table-cell" >Amount</th>
                            <th class="d-none d-sm-table-cell">Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($admin->payments() as $payment)
                            <tr>
                                <td class="text-center"> {{ $payment->id }} </td>
                                <td class="text-center"> {{ $payment->order()->id }} </td>
                                <td class="fw-semibold"> {{ $payment->order()->mineral()->name }} </td>
                                <td class="d-none d-sm-table-cell"> {{ $payment->payer()->name() }} </td>
                                <td class="d-none d-sm-table-cell"> ₦{{ $payment->amount }} </td>
                                <td class="d-none d-sm-table-cell"> {{ $payment->status }} </td>
                                <td class="d-none d-sm-table-cell"> ₦{{ $payment->payment_date }} </td>
                                <td>
                                    <a href="{{ route('payments.show', $payment->id) }}"
                                        class="btn btn-info btn-sm">Inspect</a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div> --}}
        <!-- END Dynamic Table Full - Payments -->
  
    </div>
    <!-- END Page Content -->
@endsection
