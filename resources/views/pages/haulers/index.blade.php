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
                        Hauler Types
                    </h1>
                    <h2 class="fs-base lh-base fw-medium text-muted mb-0">
                        Create and manage Hauler Types.
                    </h2>
                </div>
                <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <a class="link-fx" href="javascript:void(0)">Hauler Type</a>

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

    <div class="content">

        <!-- Dynamic Table Full -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">
                    Hauler Types, <small>Full</small>
                </h3>
                <div class="block-options">
                    <a href="{{ route('haulers.create') }}" class="btn btn-primary">
                        <i class="fa fa-plus"></i> Add new Hauler Type
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
                            <th >Capacity</th>
                            <th>Instances</th>
                            <th>Actions</th>
                            {{-- <th style="width: 15%;">Actions</th> --}}
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($haulers as $hauler)
                            <tr>
                                <td class="text-center">{{ $hauler->id }}</td>
                                <td class="fw-semibold">
                                    <a href="{{ route('haulers.show', $hauler->id) }}">{{ $hauler->name}}</a>
                                </td>
                                <td class="d-none d-sm-table-cell">
                                    {{ $hauler->volume }}
                                </td>
                                <td class="d-none d-sm-table-cell">
                                    {{ count($hauler->instances()) }}
                                </td>
                                <td>
                                    <form
                                        action="{{ $hauler->active == 1 ? route('haulers.disable', $hauler->id) : route('haulers.enable', $hauler->id) }}"
                                        method="POST" style="display:inline;">
                                        @csrf
                                        @method('PATCH')
                                        <button type="submit"
                                            class="btn btn-{{ $hauler->active == 1 ? 'warning' : 'success' }}  btn-sm">
                                            {{ $hauler->active == 1 ? 'Disable' : 'Enable' }}
                                        </button>
                                    </form>
                                    <a href="{{ route('haulers.edit', $hauler->id) }}" class="btn btn-info btn-sm">Edit</a>
                                    <form action="{{ route('haulers.destroy', $hauler->id) }}" method="POST"
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
        </div>
        <!-- END Dynamic Table Full -->

        {{-- <!-- Dynamic Table with Export Buttons -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">
                    Dynamic Table <small>Export Buttons</small>
                </h3>
            </div>
            <div class="block-content block-content-full">
                <!-- DataTables init on table by adding .js-dataTable-buttons class, functionality is initialized in js/pages/tables_datatables.js -->
                <table class="table table-bordered table-striped table-vcenter js-dataTable-buttons fs-sm">
                    <thead>
                        <tr>
                            <th class="text-center" style="width: 80px;">#</th>
                            <th>Name</th>
                            <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
                            <th style="width: 15%;">Registered</th>
                        </tr>
                    </thead>
                    <tbody>
                        @for ($i = 1; $i < 21; $i++)
                            <tr>
                                <td class="text-center">{{ $i }}</td>
                                <td class="fw-semibold">
                                    <a href="javascript:void(0)">John Smith</a>
                                </td>
                                <td class="d-none d-sm-table-cell">
                                    client{{ $i }}<span class="text-muted">@example.com</span>
                                </td>
                                <td class="text-muted">
                                    {{ rand(2, 10) }} days ago
                                </td>
                            </tr>
                        @endfor
                    </tbody>
                </table>
            </div>
        </div>
        <!-- END Dynamic Table with Export Buttons --> --}}
    </div>
@endsection

@section('css_after')
    <link rel="stylesheet" href="{{ asset('css/oneui.min.css') }}">
@endsection

@section('js_after')
    <script src="{{ asset('js/oneui.core.min.js') }}"></script>
    <script src="{{ asset('js/oneui.app.min.js') }}"></script>
@endsection
