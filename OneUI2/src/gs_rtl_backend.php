<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/get_started/rtl_backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Page Title
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Subtitle
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Dashboard</a>
          </li>
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Account</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Current
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Your Block -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
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
