@extends('layouts.backend')

@section('content')
<div class="content d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="block block-rounded" style="width: 60%; background-color: #fff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); padding: 20px;">
        <h3 class="block-title mb-0">Edit Truck Driver</h3>

        <div class="block-content">
            <form action="{{ route('truck_drivers.update', $truckDriver->id) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" value="{{ old('name', $truckDriver->name) }}">
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" value="{{ old('email', $truckDriver->email) }}">
                </div>

                <div class="form-group">
                    <label for="phone_number">Phone Number:</label>
                    <input type="text" class="form-control" id="phone_number" name="phone_number" value="{{ old('phone_number', $truckDriver->phone_number) }}">
                </div>

                <div class="form-group">
                    <label for="truck_details">Truck Details:</label>
                    <input type="text" class="form-control" id="truck_details" name="truck_details" value="{{ old('truck_details', $truckDriver->truck_details) }}">
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-success">Update Driver</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
