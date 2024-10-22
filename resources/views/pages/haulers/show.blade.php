@extends('layouts.backend')

@section('content')
    <div class="content">
        <!-- Quick Actions -->
        <div class="row">
            <div class="col-6">
                <a class="block block-rounded block-link-shadow text-center" href="{{ route('haulers.edit', $hauler->id) }}">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">
                            <i class="fa fa-pencil-alt"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Edit Hauler Type
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <form name="xdfx" action="{{ route('haulers.destroy', $hauler->id) }}" method="POST"
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
                                Remove Hauler Type
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
                        <img class="img-avatar" src="{{ asset($hauler->image_url) }}" alt="">
                    </div>
                    <h1 class="fs-lg mb-0">
                        <span>{{ $hauler->name }}</span>
                    </h1>
                    <p class="fs-sm fw-medium text-muted">{{ $hauler->volume }} Account</p>
                </div>
            </div>
            <div class="block-content bg-body-light text-center">
                <div class="row items-push text-uppercase">
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Instances</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($hauler->instances()) }}</a>
                    </div>
                    {{-- <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Value</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">₦{{ count($hauler->tickets()) }}</a>
                    </div> --}}
                    {{-- <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Tickets</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($hauler->haulers()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payments</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($hauler->payments()) }}</a>
                    </div> --}}
                </div>
            </div>
        </div>
        <!-- END User Info -->

        <!-- Addresses -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">Data</h3>
            </div>
            <div class="block-content">
                <div class="row">
                    <div class="col">
                        <!-- Data -->
                        <div class="block block-rounded block-bordered">
                            <div class="block-header border-bottom">
                                <h3 class="block-title">Description</h3>
                            </div>
                            <div class="block-content">
                                <p class="fs-sm">
                                    {{ $hauler->description }}<br>
                                </p>
                            </div>
                        </div>
                        <!-- END Data -->
                    </div>

                </div>
            </div>
        </div>
        <!-- END Addresses -->

        <!-- Dynamic Table Full - Orders -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">
                    Hauler Instances, <small>All instances</small>
                </h3>

            </div>
            <div class="block-content block-content-full">
                <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/tables_datatables.js -->
                <table class="table table-bordered table-striped table-vcenter js-dataTable-full fs-sm">
                    <thead>
                        <tr>
                            <th class="text-center" style="width: 80px;">#</th>
                            <th>Owner</th>
                            {{-- <th class="d-none d-sm-table-cell">Hauler</th> --}}
                            {{-- <th class="d-none d-sm-table-cell">Status</th> --}}
                            <th>Actions</th>
                            {{-- <th style="width: 15%;">Actions</th> --}}
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($hauler->instances() as $haulerInstance)
                            <tr>
                                <td class="text-center"> {{ $haulerInstance->id }} </td>
                                <td class="fw-semibold"> {{ $haulerInstance->owner()->name()}} </td>
                                {{-- <td class="d-none d-sm-table-cell"> {{ $haulerInstance->status }} </td> --}}
                                <td>
                                    <a href="{{ route('orders.show', $haulerInstance->id) }}"
                                        class="btn btn-info btn-sm">Inspect</a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <!-- END Dynamic Table Full - Orders -->
  
    </div>
    <!-- END Page Content -->
@endsection
