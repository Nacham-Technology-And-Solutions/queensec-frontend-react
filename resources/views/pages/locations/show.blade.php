@extends('layouts.backend')

@section('content')
    <div class="content">
        <!-- Quick Actions -->
        <div class="row">
            <div class="col-6">
                <a class="block block-rounded block-link-shadow text-center"
                    href="{{ route('locations.edit', $locState->id) }}">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">
                            <i class="fa fa-pencil-alt"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Edit Location State
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <form name="xdfx" action="{{ route('locations.destroy', [$locState->id, 'locType' => 'state']) }}"
                    method="POST" style="display:inline;">
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
                                Remove Location State
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

            </div>
            <div class="block-content bg-body-light text-center">
                <div class="row items-push text-uppercase">
                    <div class="col-6 col-md-4">
                        <div class="fw-semibold text-dark mb-1">State</div>
                        <a class="link-fx fs-4 text-primary" href="javascript:void(0)">{{ $locState->name }}</a>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class="fw-semibold text-dark mb-1">Registered Users</div>
                        <a class="link-fx fs-4 text-primary" href="javascript:void(0)">{{ count($locState->users()) }}</a>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class="fw-semibold text-dark mb-1">Localities</div>
                        <a class="link-fx fs-4 text-primary"
                            href="javascript:void(0)">{{ count($locState->locLocalities()) }}</a>
                    </div>
                    {{-- <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payments</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($locState->payments()) }}</a>
                    </div> --}}
                </div>
            </div>
        </div>
        <!-- END User Info -->


        <!-- Dynamic Table Full - Orders -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">
                    Localities, <small>under the state</small>
                </h3>
                <div class="block-options">
                    <a href="{{ route('locations.createLocality', $locState->id) }}" class="btn btn-primary">
                        <i class="fa fa-plus"></i> Add new Locality
                    </a>
                </div>

            </div>
            <div class="block-content block-content-full">
                <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/tables_datatables.js -->
                <table class="table table-bordered table-striped table-vcenter js-dataTable-full fs-sm">
                    <thead>
                        <tr>
                            <th class="text-center" style="width: 80px;">#</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($locState->locLocalities() as $locals)
                            <tr>
                                <td class="text-center"> {{ $locals->id }} </td>
                                <td class="fw-semibold"> {{ $locals->name }} </td>
                                <td class="fw-semibold"> {{ $locals->code }} </td>
                                <td>
                                    <form
                                        action="{{ $locals->active == 1 ? route('locations.disable', [$locals->id, 'locType' => 'locality']) : route('locations.enable', [$locals->id, 'locType' => 'locality']) }}"
                                        method="POST" style="display:inline;">
                                        @csrf
                                        @method('PATCH')
                                        <button type="submit"
                                            class="btn btn-{{ $locals->active == 1 ? 'warning' : 'success' }}  btn-sm">
                                            {{ $locals->active == 1 ? 'Disable' : 'Enable' }}
                                        </button>
                                    </form>
                                    <a href="{{ route('locations.editLocality', $locals->id) }}"
                                        class="btn btn-info btn-sm">Edit</a>
                                    <form action="{{ route('locations.destroy', [$locals->id, 'locType' => 'locality']) }}"
                                        method="POST" style="display:inline;">
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
        </div>
        <!-- END Dynamic Table Full - Orders -->

    </div>
    <!-- END Page Content -->
@endsection
