<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php
// Page specific configuration
$one->l_header_fixed = true;
$one->l_header_dark = true;
?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Header
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Fixed Dark
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Layout</a>
          </li>
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Header</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Fixed - Dark
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <div class="block block-rounded">
    <div class="block-content text-center">
      <p>
        A fixed, dark themed Header.
      </p>
    </div>
  </div>

  <!-- Dummy content -->
  <div class="block block-rounded">
    <div class="block-content">
      <p class="text-center py-8">...</p>
    </div>
  </div>
  <div class="block block-rounded">
    <div class="block-content">
      <p class="text-center py-8">...</p>
    </div>
  </div>
  <div class="block block-rounded">
    <div class="block-content">
      <p class="text-center py-8">...</p>
    </div>
  </div>
  <div class="block block-rounded">
    <div class="block-content">
      <p class="text-center py-8">...</p>
    </div>
  </div>
  <!-- END Dummy content -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
