@extends('layouts.backend')

@section('content')
    <div id="page-container">
        <main id="main-container">
            <div class="content">
                <h2 class="content-heading">Edit Admin User</h2>
                <div class="block">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Edit Admin User</h3>
                    </div>
                    <div class="block-content">
                        <form action="{{ route('admins.users.update', $adminUser->id) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="mb-4">
                                <label class="form-label" for="admin-name">Name</label>
                                <input type="text" class="form-control" id="admin-name" name="name" value="{{ $adminUser->name }}" required>
                                @error('name')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="admin-email">Email</label>
                                <input type="email" class="form-control" id="admin-email" name="email" value="{{ $adminUser->email }}" required>
                                @error('email')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="admin-password">Password</label>
                                <input type="password" class="form-control" id="admin-password" name="password" placeholder="Leave blank to keep current password">
                                @error('password')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                                </div>
                            <div class="mb-4">
                                <label class="form-label" for="admin-password-confirm">Password Confirmation</label>
                                <input type="password" class="form-control" id="admin-password-confirm" name="password_confirmation" placeholder="Confirm Password">
                                @error('password_confirmation')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-save me-1"></i> Save Changes
                                </button>
                                <a href="{{ route('admins.users.index') }}" class="btn btn-secondary">
                                    <i class="fa fa-arrow-left me-1"></i> Back to List
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>

@endsection

