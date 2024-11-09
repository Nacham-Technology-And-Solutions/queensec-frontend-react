@extends('layouts.backend')

@section('css')
    <!-- Page JS Plugins CSS -->
    <link rel="stylesheet" href="{{ asset('js/plugins/datatables-bs5/css/dataTables.bootstrap5.min.css') }}">
    <link rel="stylesheet" href="{{ asset('js/plugins/datatables-buttons-bs5/css/buttons.bootstrap5.min.css') }}">
@endsection

@section('js')
    <!-- jQuery (required for DataTables plugin) -->
    <script src="{{ asset('js/lib/jquery.min.js') }}"></script>

    <!-- Page JS Plugins -->
    <script src="{{ asset('js/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-bs5/js/dataTables.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons-bs5/js/buttons.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons-jszip/jszip.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons-pdfmake/pdfmake.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons-pdfmake/vfs_fonts.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons/buttons.print.min.js') }}"></script>
    <script src="{{ asset('js/plugins/datatables-buttons/buttons.html5.min.js') }}"></script>

    <!-- Page JS Code -->
    @vite(['resources/js/pages/datatables.js'])
@endsection

@section('content')
    <!-- Hero -->
    <div class="bg-body-light">
        <div class="content content-full">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
                <div class="flex-grow-1">
                    <h1 class="h3 fw-bold mb-2">
                        Order
                    </h1>
                    <h2 class="fs-base lh-base fw-medium text-muted mb-0">
                        Mmanage Orders.
                    </h2>
                </div>
                <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <a class="link-fx" href="javascript:void(0)">Order</a>

                        </li>

                        <li class="breadcrumb-item" aria-current="page">
                            View All
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
        <!-- Quick Overview -->
        <div class="row">
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-primary">{{ $states['pending'] }}</div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Pending
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">{{ $states['today'] }}</div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Today
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">{{ $states['yesterday'] }}</div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Yesterday
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">{{ $states['month'] }}</div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            This Month
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <!-- END Quick Overview -->

        <!-- All Orders -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">All Orders</h3>
                <div class="block-options">
                    <div class="dropdown">
                        <button type="button" class="btn-block-option" id="dropdown-ecom-filters" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Filters <i class="fa fa-angle-down ms-1"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-ecom-filters">
                            <a class="dropdown-item d-flex align-items-center justify-content-between"
                                href="{{ route('orders.index', ['status' => 'pending']) }}">
                                pending.
                                <span class="badge bg-black-50 rounded-pill">{{ $states['pending'] }}</span>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between"
                                href="{{ route('orders.index', ['status' => 'completed']) }}">
                                completed
                                <span class="badge bg-warning rounded-pill">{{ $states['completed'] }}</span>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between"
                                href="{{ route('orders.index', ['status' => 'cancelled']) }}">
                                cancelled
                                <span class="badge bg-info rounded-pill">{{ $states['cancelled'] }}</span>
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between"
                                href="{{ route('orders.index') }}">
                                All
                                <span class="badge bg-primary rounded-pill">{{ $states['all'] }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-content">
                <!-- Search Form -->
                <form action="{{ route('orders.index') }}">
                    <div class="mb-4">
                        <div class="input-group">
                            <input type="number" class="form-control form-control-alt" id="search" name="search"
                                placeholder="Search all orders..">
                            <button type="submit" class="input-group-text bg-body border-0">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- END Search Form -->

                <!-- All Orders Table -->
                <div class="table-responsive">
                    <table class="table table-borderless table-striped table-vcenter">
                        <thead>
                            <tr>
                                <th class="text-center" style="width: 100px;">ID</th>
                                <th class="d-none d-sm-table-cell text-center">Submitted</th>
                                <th>Status</th>
                                <th class="d-none d-xl-table-cell">Customer</th> 
                                <th class="d-none d-xl-table-cell text-center">Product</th>
                                <th class="d-none d-sm-table-cell text-end">Value</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($orders as $order)
                                <tr>
                                    <td class="text-center fs-sm">
                                        <a class="fw-semibold" href="be_pages_ecom_order.html">
                                            <strong>#{{ $order->id }}</strong>
                                        </a>
                                    </td>
                                    <td class="d-none d-sm-table-cell text-center fs-sm">
                                        {{ date('d/m/Y', strtotime($order->created_at)) }}</td>
                                    <td>
                                        @php
                                            if ($order->status == 'pending') {
                                                $statBadge = 'info';
                                            } elseif ($order->status == 'completed') {
                                                $statBadge = 'success';
                                            } else {
                                                $statBadge = 'danger';
                                            }
                                        @endphp

                                        <span class="badge bg-{{ $statBadge }}">{{ $order->status }}</span>
                                    </td>
                                    <td class="d-none d-xl-table-cell fs-sm">
                                        <a
                                            href="{{ route('users.show', $order->payee()->id) }}">{{ $order->payee()->name() }}</a>
                                    </td>                                  

                                    <td class="d-none d-xl-table-cell text-center fs-sm">
                                        <a class="fw-semibold" href="#">{{ $order->mineral()->name }}</a>
                                    </td>
                                    <td class="d-none d-sm-table-cell text-end fs-sm">
                                        <strong>₦{{ number_format($order->total_amount, 2, '.', ',') }}</strong>
                                    </td>
                                    <td class="text-center">
                                        <a href="{{ route('orders.show', $order->id) }}"
                                            class="btn btn-info btn-sm">Track</a>
                                        <form action="{{ route('orders.destroy', $order->id) }}" method="POST"
                                            style="display:inline;">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach

                        </tbody>
                    </table>
                </div>
                <!-- END All Orders Table -->

                <!-- Pagination -->
                {{ $orders->links() }}
                <!-- END Pagination -->
            </div>
        </div>
        <!-- END All Orders -->
    </div>
    <!-- END Page Content -->
@endsection

@section('css_after')
    <link rel="stylesheet" href="{{ asset('css/oneui.min.css') }}">
@endsection

@section('js_after')
    <script src="{{ asset('js/oneui.core.min.js') }}"></script>
    <script src="{{ asset('js/oneui.app.min.js') }}"></script>
@endsection
