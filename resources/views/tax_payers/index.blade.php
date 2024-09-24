@extends('layouts.backend')

@section('content')
<div class="content">
    <div class="block block-rounded">
        <div class="block-header block-header-default">
            <h3 class="block-title">Tax Payers</h3>
            <div class="block-options">
                <a href="{{ route('tax_payers.create') }}" class="btn btn-primary">
                    <i class="fa fa-plus"></i> Add Tax Payer
                </a>
                
            </div>
        </div>
        <div class="block-content">
            <div class="table-responsive">
            <table class="table table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($taxPayers as $taxPayer)
        <tr>
            <td>{{ $taxPayer->name }}</td>
            <td>{{ $taxPayer->email }}</td>
            <td>{{ $taxPayer->status }}</td>
            <td>
                <form action="{{ $taxPayer->status == 'active' ? route('tax_payers.disable', $taxPayer->id) : route('tax_payers.enable', $taxPayer->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('PATCH')
                    <button type="submit" class="btn btn-{{ $taxPayer->status == 'active' ? 'warning' : 'success' }}">
                        {{ $taxPayer->status == 'active' ? 'Disable' : 'Enable' }}
                    </button>
                </form>
                <a href="{{ route('tax_payers.edit', $taxPayer->id) }}" class="btn btn-info">Edit</a>
                <form action="{{ route('tax_payers.destroy', $taxPayer->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

                <!-- <table class="table table-bordered table-striped table-vcenter">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($taxPayers as $taxPayer)
                        <tr>
                            <td>{{ $taxPayer->id }}</td>
                            <td>{{ $taxPayer->name }}</td>
                            <td>{{ $taxPayer->email }}</td>
                            <td>{{ $taxPayer->status }}</td>
                            <td>
                                <a href="{{ route('tax_payers.edit', $taxPayer->id) }}" class="btn btn-sm btn-warning">
                                    <i class="fa fa-edit"></i> Edit
                                </a>
                                <a href="{{ route('tax_payers.disable', $taxPayer->id) }}" class="btn btn-sm btn-danger">
                                    <i class="fa fa-ban"></i> Disable
                                </a>
                                <a href="{{ route('tax_payers.quick_actions', $taxPayer->id) }}" class="btn btn-sm btn-info">
                                    <i class="fa fa-tasks"></i> Quick Actions
                                </a>
                                <form action="{{ route('tax_payers.destroy', $taxPayer->id) }}" method="POST" style="display:inline;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-danger">
                                        <i class="fa fa-trash"></i> Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table> -->
            </div>
        </div>
    </div>
</div>
@endsection

@section('css_after')
<link rel="stylesheet" href="{{ asset('css/oneui.min.css') }}">
@endsection

@section('js_after')
<script src="{{ asset('js/oneui.core.min.js') }}"></script>
<script src="{{ asset('js/oneui.app.min.js') }}"></script>
@endsection
