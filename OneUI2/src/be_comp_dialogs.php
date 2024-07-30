<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/sweetalert2/sweetalert2.min.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Dialogs
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Customizable and accesible popup boxes powered by SweetAlert2 plugin.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Dialogs
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<!-- SweetAlert2 demo functionality is initialized in js/pages/be_comp_dialogs.min.js which was auto compiled from _js/pages/be_comp_dialogs.js  -->
<!-- For more info and examples, you can check out https://github.com/sweetalert2/sweetalert2 -->
<div class="content">
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">SweetAlert2</h3>
    </div>
    <div class="block-content">
      <div class="row items-push">
        <div class="col-md-6">
          <!-- Simple -->
          <h4 class="border-bottom pb-2">Simple</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing a simple message
          </p>
          <button type="button" class="js-swal-simple btn btn-alt-secondary push">
            Launch Dialog
          </button>
          <!-- END Simple -->
        </div>
        <div class="col-md-6">
          <!-- Success -->
          <h4 class="border-bottom pb-2">Success</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing a message after a successful operation
          </p>
          <button type="button" class="js-swal-success btn btn-alt-secondary push">
            <i class="fa fa-check-circle text-success me-1"></i> Launch Dialog
          </button>
          <!-- END Success -->
        </div>
        <div class="col-md-6">
          <!-- Info -->
          <h4 class="border-bottom pb-2">Info</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing an informational message
          </p>
          <button type="button" class="js-swal-info btn btn-alt-secondary push">
            <i class="fa fa-info-circle text-info me-1"></i> Launch Dialog
          </button>
          <!-- END Info -->
        </div>
        <div class="col-md-6">
          <!-- Warning -->
          <h4 class="border-bottom pb-2">Warning</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing a warning message
          </p>
          <button type="button" class="js-swal-warning btn btn-alt-secondary push">
            <i class="fa fa-exclamation-triangle text-warning me-1"></i> Launch Dialog
          </button>
          <!-- END Warning -->
        </div>
        <div class="col-md-6">
          <!-- Error -->
          <h4 class="border-bottom pb-2">Error</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing a message after a failed operation
          </p>
          <button type="button" class="js-swal-error btn btn-alt-secondary push">
            <i class="fa fa-times-circle text-danger me-1"></i> Launch Dialog
          </button>
          <!-- END Error -->
        </div>
        <div class="col-md-6">
          <!-- Question -->
          <h4 class="border-bottom pb-2">Question</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing a question message
          </p>
          <button type="button" class="js-swal-question btn btn-alt-secondary push">
            <i class="fa fa-question-circle text-muted me-1"></i> Launch Dialog
          </button>
          <!-- END Question -->
        </div>
        <div class="col-md-6">
          <!-- Confirmation -->
          <h4 class="border-bottom pb-2">Confirmation</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing a confirmation message
          </p>
          <button type="button" class="js-swal-confirm btn btn-alt-secondary push mb-md-0">
            <i class="fa fa-check-square text-muted me-1"></i> Launch Dialog
          </button>
          <!-- END Confirmation -->
        </div>
        <div class="col-md-6">
          <!-- Custom Position -->
          <h4 class="border-bottom pb-2">Custom Position</h4>
          <p class="fs-sm text-muted mb-2">
            A dialog showing at the top right of the screen
          </p>
          <button type="button" class="js-swal-custom-position btn btn-alt-secondary">
            <i class="fa fa-bolt text-muted me-1"></i> Launch Dialog
          </button>
          <!-- END Custom Position -->
        </div>
      </div>
    </div>
  </div>
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/sweetalert2/sweetalert2.min.js'); ?>

<!-- Page JS Code -->
<?php $one->get_js('js/pages/be_comp_dialogs.min.js'); ?>

<?php require 'inc/_global/views/footer_end.php'; ?>
