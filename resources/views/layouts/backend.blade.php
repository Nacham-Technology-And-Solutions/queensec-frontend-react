<!doctype html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

  <title>OneUI - Bootstrap 5 Admin Template &amp; UI Framework</title>

  <meta name="description" content="OneUI - Bootstrap 5 Admin Template &amp; UI Framework created by pixelcave and published on Themeforest">
  <meta name="author" content="pixelcave">
  <meta name="robots" content="noindex, nofollow">

  <!-- Icons -->
  <link rel="shortcut icon" href="{{ asset('media/favicons/favicon.png') }}">
  <link rel="icon" sizes="192x192" type="image/png" href="{{ asset('media/favicons/favicon-192x192.png') }}">
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('media/favicons/apple-touch-icon-180x180.png') }}">

  <!-- Modules -->
  @yield('css')
  @vite(['resources/sass/main.scss', 'resources/js/oneui/app.js'])

  <!-- Alternatively, you can also include a specific color theme after the main stylesheet to alter the default color theme of the template -->
  {{-- @vite(['resources/sass/main.scss', 'resources/sass/oneui/themes/amethyst.scss', 'resources/js/oneui/app.js']) --}}
  @yield('js')
</head>

<body>
  <!-- Page Container -->
  <div id="page-container" class="sidebar-o enable-page-overlay sidebar-dark side-scroll page-header-fixed main-content-narrow">
    <!-- Side Overlay-->
    <aside id="side-overlay" class="fs-sm">
      <div class="content-header border-bottom">
        <a class="img-link me-1" href="javascript:void(0)">
          <img class="img-avatar img-avatar32" src="{{ asset('media/avatars/avatar10.jpg') }}" alt="">
        </a>
        <div class="ms-2">
          <a class="text-dark fw-semibold fs-sm" href="javascript:void(0)">John Smith</a>
        </div>
        <a class="ms-auto btn btn-sm btn-alt-danger" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_close">
          <i class="fa fa-fw fa-times"></i>
        </a>
      </div>
      <div class="content-side">
        <p>Content..</p>
      </div>
    </aside>

    <!-- Sidebar -->
    <nav id="sidebar" aria-label="Main Navigation">
      <div class="content-header">
        <a class="font-semibold text-dual" href="/">
          <span class="smini-visible">
            <i class="fa fa-circle-notch text-primary"></i>
          </span>
          <span class="smini-hide fs-5 tracking-wider">Tax-<span class="fw-normal">Payer</span></span>
        </a>
        <div>
          <a class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="dark_mode_toggle" href="javascript:void(0)">
            <i class="far fa-moon"></i>
          </a>
          <div class="dropdown d-inline-block ms-1">
            <a class="btn btn-sm btn-alt-secondary" id="sidebar-themes-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
              <i class="fa fa-brush"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end fs-sm smini-hide border-0" aria-labelledby="sidebar-themes-dropdown">
              <a class="dropdown-item fw-medium" data-toggle="layout" data-action="sidebar_style_light" href="javascript:void(0)">
                <span>Sidebar Light</span>
              </a>
              <a class="dropdown-item fw-medium" data-toggle="layout" data-action="sidebar_style_dark" href="javascript:void(0)">
                <span>Sidebar Dark</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item fw-medium" data-toggle="layout" data-action="header_style_light" href="javascript:void(0)">
                <span>Header Light</span>
              </a>
              <a class="dropdown-item fw-medium" data-toggle="layout" data-action="header_style_dark" href="javascript:void(0)">
                <span>Header Dark</span>
              </a>
            </div>
          </div>
          <a class="d-lg-none btn btn-sm btn-alt-secondary ms-1" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
            <i class="fa fa-fw fa-times"></i>
          </a>
        </div>
      </div>

      <div class="js-sidebar-scroll">
        <div class="content-side">
          <ul class="nav-main">
            <li class="nav-main-item">
              <a class="nav-main-link{{ request()->is('dashboard') ? ' active' : '' }}" href="/dashboard">
                <i class="nav-main-link-icon si si-cursor"></i>
                <span class="nav-main-link-name">Dashboard</span>
              </a>
            </li>

            <li class="nav-main-heading">Various</li>
            <li class="nav-main-item{{ request()->is('pages/*') ? ' open' : '' }}">
              <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                <i class="nav-main-link-icon si si-layers"></i>
                <span class="nav-main-link-name">Pages</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_generic_blank.html">
                    <span class="nav-main-link-name">Blank</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_generic_blank_block.html">
                    <span class="nav-main-link-name">Blank (Block)</span>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-main-heading">User Management</li>
            <li class="nav-main-item{{ request()->is('admins/users*') ? ' open' : '' }}">
              <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                <i class="nav-main-link-icon si si-users"></i>
                <span class="nav-main-link-name">Admin Users</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link{{ request()->is('admins/users/create') ? ' active' : '' }}" href="{{ route('admins.users.create') }}">
                    <span class="nav-main-link-name">Create New Admin User</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link{{ request()->is('admins/users') ? ' active' : '' }}" href="{{ route('admins.users.index') }}">
                    <span class="nav-main-link-name">View Admin Users</span>
                  </a>
                </li>
              </ul>
            </li>
            
            <!-- Add Tax Payers Section -->
            <li class="nav-main-item{{ request()->is('tax_payers*') ? ' open' : '' }}">
              <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                <i class="nav-main-link-icon si si-wallet"></i>
                <span class="nav-main-link-name">Tax Payers</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link{{ request()->is('tax_payers/create') ? ' active' : '' }}" href="{{ route('tax_payers.create') }}">
                    <span class="nav-main-link-name">Create Tax Payer</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link{{ request()->is('tax_payers') ? ' active' : '' }}" href="{{ route('tax_payers.index') }}">
                    <span class="nav-main-link-name">View Tax Payers</span>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Add Truck Drivers Section -->
            <li class="nav-main-item{{ request()->is('truck_drivers*') ? ' open' : '' }}">
              <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                <i class="nav-main-link-icon si si-truck"></i>
                <span class="nav-main-link-name">Truck Drivers</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link{{ request()->is('truck_drivers/create') ? ' active' : '' }}" href="{{ route('truck_drivers.create') }}">
                    <span class="nav-main-link-name">Create Truck Driver</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link{{ request()->is('truck_drivers') ? ' active' : '' }}" href="{{ route('truck_drivers.index') }}">
                    <span class="nav-main-link-name">View Truck Drivers</span>
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Container -->
    <main id="main-container">
      @yield('content')
    </main>

    <!-- Footer -->
    <footer id="page-footer" class="bg-body-light">
      <div class="content py-3 font-size-sm clearfix">
        <div class="float-end">
          <a class="font-w600" href="https://pixelcave.com" target="_blank">OneUI</a> &copy; <span data-toggle="year-copy"></span>
        </div>
        <div class="float-start">
          <a class="font-w600" href="https://pixelcave.com" target="_blank">Pixelcave</a>
        </div>
      </div>
    </footer>
  </div>
  <!-- END Page Container -->
</body>

</html>
