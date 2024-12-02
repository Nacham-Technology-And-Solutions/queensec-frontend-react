@extends('layouts.backend')
@section('content')

    <!-- Page Container -->
    <div id="page-container">
        <!-- Main Container -->
        <main id="main-container">
            <!-- Page Content -->
            <div class="row g-0 justify-content-center">
                <div class="hero-static col-lg-7">
                    <div class="content content-full overflow-hidden">
                        <!-- Header -->
                        <div class="py-5 text-center">
                            <a href="index.html">
                                <i class="fa fa-2x fa-circle-notch text-primary"></i>
                            </a>
                            <h1 class="h3 fw-bold mt-3 mb-2">Create New Admin User</h1>
                            <h2 class="fs-base fw-medium text-muted mb-0">Fill the form below to create a new admin user</h2>
                        </div>
                        <!-- END Header -->

                        <!-- Admin User Creation Form -->
                        <form class="js-validation-create-admin" action="{{ route('admins.users.store') }}" method="POST">
                            @csrf
                            <!-- Administrator section -->
                            @method('POST')
                            <div class="block block-rounded">
                                <div class="block-header block-header-default">
                                    <h3 class="block-title">Administrator Details</h3>
                                </div>
                                <div class="block-content">
                                    <div class="row items-push">
                                        <div class="col-lg-4">
                                            <p class="fs-sm text-muted">
                                                Please provide the necessary details to create a new admin user.
                                            </p>
                                        </div>
                                        <div class="col-lg-6 offset-lg-1">
                                            <div class="mb-4">
                                                <label class="form-label" for="admin-name">Name</label>
                                                <input type="text" class="form-control form-control-lg" id="admin-name" name="name" placeholder="Admin Name" required>
                                                @error('name')
                                                    <div class="text-danger">{{ $message }}</div>
                                                @enderror
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label" for="admin-email">Email</label>
                                                <input type="email" class="form-control form-control-lg" id="admin-email" name="email" placeholder="Admin Email" required>
                                                @error('email')
                                                    <div class="text-danger">{{ $message }}</div>
                                                @enderror
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label" for="admin-password">Password</label>
                                                <input type="password" class="form-control form-control-lg" id="admin-password" name="password" placeholder="Password" required>
                                                @error('password')
                                                    <div class="text-danger">{{ $message }}</div>
                                                @enderror
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label" for="admin-password-confirm">Password Confirmation</label>
                                                <input type="password" class="form-control form-control-lg" id="admin-password-confirm" name="password_confirmation" placeholder="Confirm Password" required>
                                                @error('password_confirmation')
                                                    <div class="text-danger">{{ $message }}</div>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END Administrator section -->

                            @if (session('success'))
                                <div class="alert alert-success">
                                    {{ session('success') }}
                                </div>
                            @endif

                            <!-- Actions -->
                            <div class="block block-transparent">
                                <div class="block-content">
                                    <div class="row items-push">
                                        <div class="col-lg-7 offset-lg-5">
                                            <button type="submit" class="btn btn-primary mb-2">
                                                <i class="fa fa-user-plus opacity-50 me-1"></i> Create Admin User
                                            </button>
                                            <!-- Link to the index of admin users -->
                                            <a href="{{ route('admins.users.index') }}" class="btn btn-secondary mb-2">
                                                <i class="fa fa-list opacity-50 me-1"></i> View Admin Users
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END Actions -->
                        </form>
                        <!-- END Admin User Creation Form -->
                    </div>
                </div>
            </div>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->
    </div>
    <!-- END Page Container -->

</body>
@endsection

