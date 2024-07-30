<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/get_started/rtl_backend_boxed/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Navigation -->
<div class="bg-primary-darker">
  <div class="content py-3">
    <!-- Toggle Main Navigation -->
    <div class="d-lg-none">
      <!-- Class Toggle, functionality initialized in Helpers.oneToggleClass() -->
      <button type="button" class="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center" data-toggle="class-toggle" data-target="#main-navigation" data-class="d-none">
        Menu
        <i class="fa fa-bars"></i>
      </button>
    </div>
    <!-- END Toggle Main Navigation -->

    <!-- Main Navigation -->
    <div id="main-navigation" class="d-none d-lg-block mt-2 mt-lg-0">
      <ul class="nav-main nav-main-dark nav-main-horizontal nav-main-hover">
        <?php $one->build_nav(false, true); ?>
        <li class="nav-main-heading">Extra</li>
        <li class="nav-main-item me-lg-auto">
          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
            <i class="nav-main-link-icon fa fa-brush"></i>
            <span class="nav-main-link-name d-lg-none">Themes</span>
          </a>
          <ul class="nav-main-submenu nav-main-submenu-left">
            <li class="nav-main-item">
              <a class="nav-main-link" data-toggle="theme" data-theme="default" href="#">
                <i class="nav-main-link-icon fa fa-square text-default"></i>
                <span class="nav-main-link-name">Default</span>
              </a>
            </li>
            <li class="nav-main-item">
              <a class="nav-main-link" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/amethyst.min.css" href="#">
                <i class="nav-main-link-icon fa fa-square text-amethyst"></i>
                <span class="nav-main-link-name">Amethyst</span>
              </a>
            </li>
            <li class="nav-main-item">
              <a class="nav-main-link" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/city.min.css" href="#">
                <i class="nav-main-link-icon fa fa-square text-city"></i>
                <span class="nav-main-link-name">City</span>
              </a>
            </li>
            <li class="nav-main-item">
              <a class="nav-main-link" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/flat.min.css" href="#">
                <i class="nav-main-link-icon fa fa-square text-flat"></i>
                <span class="nav-main-link-name">Flat</span>
              </a>
            </li>
            <li class="nav-main-item">
              <a class="nav-main-link" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/modern.min.css" href="#">
                <i class="nav-main-link-icon fa fa-square text-modern"></i>
                <span class="nav-main-link-name">Modern</span>
              </a>
            </li>
            <li class="nav-main-item">
              <a class="nav-main-link" data-toggle="theme" data-theme="<?php echo $one->assets_folder; ?>/css/themes/smooth.min.css" href="#">
                <i class="nav-main-link-icon fa fa-square text-smooth"></i>
                <span class="nav-main-link-name">Smooth</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- END Main Navigation -->
  </div>
</div>
<!-- END Navigation -->

<!-- Page Content -->
<div class="content">
  <!-- Your Block -->
  <div class="block block-rounded block-header-default">
    <div class="block-header">
      <h3 class="block-title">
        Title <small>Get Started</small>
      </h3>
      <div class="block-options ps-0 pe-3">
        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"></button>
        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
          <i class="si si-pin"></i>
        </button>
        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
          <i class="si si-refresh"></i>
        </button>
        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="close">
          <i class="si si-close"></i>
        </button>
      </div>
    </div>
    <div class="block-content fs-sm">
      <p>
        Create your own awesome project!
      </p>
    </div>
  </div>
  <!-- END Your Block -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
