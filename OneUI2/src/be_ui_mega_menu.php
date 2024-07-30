<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php
$one->inc_header = 'inc/backend/views/inc_header_mega_menu.php';
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
          Mega Menu
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          You can easily create mega menus in the header for larger screens.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Elements</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Mega Menu
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
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
