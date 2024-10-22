@extends('layouts.backend')

@section('content')
    <div class="content">
        <!-- Quick Actions -->
        <div class="row">
            <div class="col-6">
                <a class="block block-rounded block-link-shadow text-center" href="{{ route('minerals.edit', $mineral->id) }}">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">
                            <i class="fa fa-pencil-alt"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Edit Mineral
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <form name="xdfx" action="{{ route('minerals.destroy', $mineral->id) }}" method="POST"
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
                                Remove Mineral
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
                        <img class="img-avatar" src="{{ asset($mineral->image_url) }}" alt="">
                    </div>
                    <h1 class="fs-lg mb-0">
                        <span>{{ $mineral->name }}</span>
                    </h1>
                    <p class="fs-sm fw-medium text-muted">{{ $mineral->volume }} Account</p>
                </div>
            </div>
            <div class="block-content bg-body-light text-center">
                <div class="row items-push text-uppercase">
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Orders</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($mineral->orders()) }}</a>
                    </div>
                    {{-- <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Value</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">₦{{ count($mineral->tickets()) }}</a>
                    </div> --}}
                    {{-- <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Tickets</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($mineral->minerals()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payments</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($mineral->payments()) }}</a>
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
                                    {{ $mineral->description }}<br>
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
        {{-- <div class="block block-rounded">
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($mineral->instances() as $mineralInstance)
                            <tr>
                                <td class="text-center"> {{ $mineralInstance->id }} </td>
                                <td class="fw-semibold"> {{ $mineralInstance->owner()->name()}} </td>
                                <td>
                                    <a href="{{ route('orders.show', $mineralInstance->id) }}"
                                        class="btn btn-info btn-sm">Inspect</a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div> --}}
        <!-- END Dynamic Table Full - Orders -->
  
    </div>
    <!-- END Page Content -->
@endsection
