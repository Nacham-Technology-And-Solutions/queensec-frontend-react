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
                        Tax Users
                    </h1>
                    <h2 class="fs-base lh-base fw-medium text-muted mb-0">
                        Control everything concerning tax users.
                    </h2>
                </div>
                <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <a class="link-fx" href="javascript:void(0)">Users</a>

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
                    Tax Users, <small>Full</small>
                </h3>
                <div class="block-options">
                    <a href="{{ route('users.create') }}" class="btn btn-primary">
                        <i class="fa fa-plus"></i> Add Tax Payer
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
                            <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
                            <th class="d-none d-sm-table-cell" style="width: 30%;">Type</th>
                            <th>Actions</th>
                            {{-- <th style="width: 15%;">Actions</th> --}}
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($taxUsers as $taxUser)
                            <tr>
                                <td class="text-center">{{ $taxUser->id }}</td>
                                <td class="fw-semibold">
                                    <a href="{{ route('users.show', $taxUser->id) }}">{{ $taxUser->name() }}</a>
                                </td>
                                <td class="d-none d-sm-table-cell">
                                    {{ $taxUser->email }}
                                </td>
                                <td class="d-none d-sm-table-cell">
                                    {{ $taxUser->userType() }}
                                </td>
                                {{-- <td class="text-center">
                                    <div class="btn-group">
                                        <a href="{{ route('users.edit', $taxUser->id) }}" class="btn btn-info"
                                            data-bs-toggle="tooltip" title="Edit"><i
                                                class="fa fa-fw fa-pencil-alt"></i></a>
                                        <button type="button" class="btn btn-sm btn-alt-secondary" data-bs-toggle="tooltip"
                                            title="Edit">
                                            <i class="fa fa-fw fa-pencil-alt"></i>
                                        </button>
                                        <form class="btn btn-danger " data-bs-toggle="tooltip" title="Delete"
                                            action="{{ route('users.destroy', $taxUser->id) }}" method="POST"
                                            style="display:inline;">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger">Delete</button>
                                            <button type="submit" class="btn ">
                                                <i class="fa fa-fw fa-times"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td> --}}
                                <td>
                                    <form
                                        action="{{ $taxUser->active == 1 ? route('users.disable', $taxUser->id) : route('users.enable', $taxUser->id) }}"
                                        method="POST" style="display:inline;">
                                        @csrf
                                        @method('PATCH')
                                        <button type="submit"
                                            class="btn btn-{{ $taxUser->active == 1 ? 'warning' : 'success' }}  btn-sm">
                                            {{ $taxUser->active == 1 ? 'Disable' : 'Enable' }}
                                        </button>
                                    </form>
                                    <a href="{{ route('users.edit', $taxUser->id) }}" class="btn btn-info btn-sm">Edit</a>
                                    <form action="{{ route('users.destroy', $taxUser->id) }}" method="POST"
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
