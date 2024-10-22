
@extends('layouts.backend')
@section('content')
    <div id="page-container">
        <main id="main-container">
            <div class="content">
                <h2 class="content-heading">Admin Users</h2>
                <div class="block">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">List of Admin Users</h3>
                        <a href="{{ route('admins.create') }}" class="btn btn-primary float-right">Create New Admin User</a>
                    </div>
                    <div class="block-content">
                        @if (session('success'))
                            <div class="alert alert-success">{{ session('success') }}</div>
                        @endif
                        <table class="table table-bordered table-striped table-vcenter">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($adminUsers as $adminUser)
                                    <tr>
                                        <td>{{ $adminUser->id }}</td>
                                        <td>{{ $adminUser->name() }}</td>
                                        <td>{{ $adminUser->email }}</td>
                                        <td>
                                            <a href="{{ route('admins.edit', $adminUser->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                            <form action="{{ route('admins.destroy', $adminUser->id) }}" method="POST" style="display:inline;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

@endsection