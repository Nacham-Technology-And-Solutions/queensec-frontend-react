@extends('layouts.backend')

@section('content')
<div class="content">
    <div class="block block-rounded">
        <div class="block-header block-header-default">
            <h3 class="block-title">Truck Drivers</h3>
            <a href="{{ route('truck_drivers.create') }}" class="btn btn-primary">Add Truck Driver</a>
        </div>
        <div class="block-content">
            <!-- Display success message -->
            @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($truckDrivers as $truckDriver)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $truckDriver->name }}</td>
                            <td>{{ $truckDriver->email }}</td>
                            <td>{{ $truckDriver->phone_number ?? 'N/A' }}</td>
                            <td>
                                <a href="{{ route('truck_drivers.edit', $truckDriver->id) }}" class="btn btn-sm btn-warning">Edit</a>

                                <form action="{{ route('truck_drivers.destroy', $truckDriver->id) }}" method="POST" style="display:inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure you want to delete this driver?');">Delete</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
    {{ $truckDrivers->links() }}
</div>

            </div>
        </div>
    </div>
</div>
@endsection
