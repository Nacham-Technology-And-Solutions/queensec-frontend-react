<?php
/**
 * backend_boxed/views/inc_header.php
 *
 * Author: pixelcave
 *
 * The header of landing page
 *
 */
?>

<!-- Header -->
<header id="page-header">
  <!-- Header Content -->
  <div class="content-header">
    <!-- Left Section -->
    <div class="d-flex align-items-center">
      <!-- Logo -->
      <a class="fw-bold fs-lg tracking-wider text-dual me-2" href="index.php">
        One<span class="fw-semibold">UI</span>
      </a>
      <!-- END Logo -->

      <!-- Version -->
      <div class="fs-xs fw-medium py-1 px-3 rounded-pill bg-body-dark text-dark">v<?php echo $one->version; ?></div>
      <!-- END Version -->
    </div>
    <!-- END Left Section -->

    <!-- Right Section -->
    <div class="d-flex align-items-center">
      <!-- Navigation -->
      <ul class="nav-main nav-main-horizontal nav-main-hover d-none d-lg-block me-2">
        <li class="nav-main-item">
          <a class="nav-main-link" href="#one-vue-edition">
            <i class="nav-main-link-icon fab fa-vuejs"></i>
            <span class="nav-main-link-name">Vue Edition</span>
          </a>
        </li>
        <li class="nav-main-item">
          <a class="nav-main-link" href="#one-versions">
            <i class="nav-main-link-icon fa fa-box"></i>
            <span class="nav-main-link-name">Versions</span>
          </a>
        </li>
        <li class="nav-main-item">
          <a class="nav-main-link" href="#one-features">
          <i class="nav-main-link-icon fa fa-rocket"></i>
            <span class="nav-main-link-name">Features</span>
          </a>
        </li>
      </ul>
      <!-- END Navigation -->

      <!-- Dark Mode -->
      <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
      <button type="button" class="btn btn-alt-secondary me-1" data-toggle="layout" data-action="dark_mode_toggle">
        <i class="far fa-moon"></i>
      </button>
      <!-- END Dark Mode -->

      <!-- Options -->
      <div class="dropdown">
        <button type="button" class="btn btn-alt-secondary me-2" id="sidebar-themes-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-brush"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-end fs-sm smini-hide border-0" aria-labelledby="sidebar-themes-dropdown">
          <!-- Color Themes -->
          <!-- Layout API, functionality initialized in Template._uiHandleTheme() -->
          <a class="dropdown-item d-flex align-items-center justify-content-between fw-medium" data-toggle="theme" data-theme="default" href="#">
            <span>Default</span>
            <i class="fa fa-circle text-default"></i>
          </a>
          <a class="dropdown-item d-flex align-items-center justify-content-between fw-medium" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/amethyst.min.css" href="#">
            <span>Amethyst</span>
            <i class="fa fa-circle text-amethyst"></i>
          </a>
          <a class="dropdown-item d-flex align-items-center justify-content-between fw-medium" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/city.min.css" href="#">
            <span>City</span>
            <i class="fa fa-circle text-city"></i>
          </a>
          <a class="dropdown-item d-flex align-items-center justify-content-between fw-medium" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/flat.min.css" href="#">
            <span>Flat</span>
            <i class="fa fa-circle text-flat"></i>
          </a>
          <a class="dropdown-item d-flex align-items-center justify-content-between fw-medium" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/modern.min.css" href="#">
            <span>Modern</span>
            <i class="fa fa-circle text-modern"></i>
          </a>
          <a class="dropdown-item d-flex align-items-center justify-content-between fw-medium" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/smooth.min.css" href="#">
            <span>Smooth</span>
            <i class="fa fa-circle text-smooth"></i>
          </a>
          <!-- END Color Themes -->
        </div>
      </div>
      <!-- END Options -->

      <!-- Purchase Link -->
      <a class="btn btn-success" data-toggle="click-ripple" href="https://1.envato.market/AVD6j">
        <i class="fa fa-fw fa-shopping-cart opacity-50"></i>
        <span class="d-none d-sm-inline-block ms-1">Purchase</span>
      </a>
      <!-- END Purchase Link -->
    </div>
    <!-- END Right Section -->
  </div>
  <!-- END Header Content -->

  <!-- Header Loader -->
  <!-- Please check out the Loaders page under Components category to see examples of showing/hiding it -->
  <div id="page-header-loader" class="overlay-header bg-primary-lighter">
    <div class="content-header">
      <div class="w-100 text-center">
        <i class="fa fa-fw fa-circle-notch fa-spin text-primary"></i>
      </div>
    </div>
  </div>
  <!-- END Header Loader -->
</header>
<!-- END Header -->
