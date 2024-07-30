<?php
/**
 * backend/views/inc_sidebar_mini_nav.php
 *
 * Author: pixelcave
 *
 * An example sidebar showcasing a mini vertical navigation along with the main navigation
 *
 */
?>

<!-- Sidebar -->
<!--
    Sidebar Mini Mode is not supported with mini navigation
-->
<nav id="sidebar" class="with-mini-nav" aria-label="Main Navigation">
  <!-- Sidebar Mini Nav -->
  <div class="sidebar-mini-nav">
    <!-- Logo -->
    <a href="index.php" class="mini-nav-item h-header">
      <i class="fa fa-circle-notch text-primary"></i>
    </a>
    <!-- END Logo -->

    <!-- Mini Main Nav -->
    <nav class="flex-grow-1 space-y-1">
      <a class="mini-nav-item" href="javascript:void(0)">
        <i class="si si-briefcase fs-sm"></i>
      </a>
      <a class="mini-nav-item" href="javascript:void(0)">
        <i class="si si-pie-chart fs-sm"></i>
      </a>
      <a class="mini-nav-item" href="javascript:void(0)">
        <i class="si si-users fs-sm"></i>
      </a>
    </nav>
    <!-- END Mini Main Nav -->

    <!-- Mini User Nav -->
    <nav class="space-y-1 pb-2">
      <a class="mini-nav-item" href="be_pages_generic_profile.php">
        <i class="si si-settings fs-sm"></i>
      </a>
      <a class="mini-nav-item" href="op_auth_signin.php">
        <i class="si si-logout fs-sm"></i>
      </a>
    </nav>
    <!-- END Mini User Nav -->
  </div>
  <!-- END Sidebar Mini Nav -->

  <!-- Sidebar Scrolling -->
  <div class="js-sidebar-scroll full-height">
    <!-- Side Header -->
    <div class="content-header">
      <!-- Logo -->
      <a class="fw-semibold text-dual" href="index.php">
        <span class="smini-visible">
          <i class="fa fa-circle-notch text-primary"></i>
        </span>
        <span class="smini-hide fs-5 tracking-wider">One<span class="fw-normal">UI</span></span>
      </a>
      <!-- END Logo -->

      <!-- Extra -->
      <div>
        <!-- Dark Mode -->
        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
        <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="dark_mode_toggle">
          <i class="far fa-moon"></i>
        </button>
        <!-- END Dark Mode -->

        <!-- Options -->
        <div class="dropdown d-inline-block ms-1">
          <button type="button" class="btn btn-sm btn-alt-secondary" id="sidebar-themes-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

            <div class="dropdown-divider"></div>

            <!-- Sidebar Styles -->
            <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
            <a class="dropdown-item fw-medium" data-toggle="layout" data-action="sidebar_style_light" href="javascript:void(0)">
              <span>Sidebar Light</span>
            </a>
            <a class="dropdown-item fw-medium" data-toggle="layout" data-action="sidebar_style_dark" href="javascript:void(0)">
              <span>Sidebar Dark</span>
            </a>
            <!-- END Sidebar Styles -->

            <div class="dropdown-divider"></div>

            <!-- Header Styles -->
            <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
            <a class="dropdown-item fw-medium" data-toggle="layout" data-action="header_style_light" href="javascript:void(0)">
              <span>Header Light</span>
            </a>
            <a class="dropdown-item fw-medium" data-toggle="layout" data-action="header_style_dark" href="javascript:void(0)">
              <span>Header Dark</span>
            </a>
            <!-- END Header Styles -->
          </div>
        </div>
        <!-- END Options -->

        <!-- Close Sidebar, Visible only on mobile screens -->
        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
        <a class="d-lg-none btn btn-sm btn-alt-secondary ms-1" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
          <i class="fa fa-fw fa-times"></i>
        </a>
        <!-- END Close Sidebar -->
      </div>
      <!-- END Extra -->
    </div>
    <!-- END Side Header -->
    
    <!-- Side Navigation -->
    <div class="content-side">
      <ul class="nav-main">
        <?php $one->build_nav(); ?>
      </ul>
    </div>
    <!-- END Side Navigation -->
  </div>
  <!-- END Sidebar Scrolling -->
</nav>
<!-- END Sidebar -->
