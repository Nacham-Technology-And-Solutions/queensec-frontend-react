<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Notifications
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Powerful alerts based on Bootstrap Toasts and Bootstrap Notify plugin.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Notifications
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content position-relative">
  <!-- Bootstrap Toasts -->
  <div class="toast-container position-absolute top-0 end-0 p-3">
    <!-- Toast Example 1 -->
    <div id="toast-example-1" class="toast fade hide" data-delay="4000" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i class="si si-bubble text-primary me-2"></i>
        <strong class="me-auto">Title</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        This is a nice notification based on Bootstrap implementation.
      </div>
    </div>
    <!-- END Toast Example 1 -->

    <!-- Toast Example 2 -->
    <div id="toast-example-2" class="toast fade hide" data-delay="4000" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i class="si si-wrench text-danger me-2"></i>
        <strong class="me-auto">System</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        You can alert the user with a system message!
      </div>
    </div>
    <!-- END Toast Example 2 -->
  </div>
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Bootstrap Toasts</h3>
    </div>
    <div class="block-content">
      <!-- Default -->
      <h4 class="border-bottom pb-2">Default</h4>
      <div class="row items-push">
        <div class="col-lg-4">
          <p class="fs-sm text-muted">
            A nice toast with a message
          </p>
        </div>
        <div class="col-lg-8">
          <button type="button" class="btn btn-alt-primary push" onclick="new bootstrap.Toast(document.getElementById('toast-example-1')).show();">
            <i class="fa fa-bell me-1 opacity-50"></i> Launch Toast 1
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>new bootstrap.Toast(document.getElementById('toast-example-1')).show();</code>
          </p>
          <button type="button" class="btn btn-alt-primary push" onclick="new bootstrap.Toast(document.getElementById('toast-example-2')).show();">
            <i class="fa fa-bell me-1 opacity-50"></i> Launch Toast 2
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>new bootstrap.Toast(document.getElementById('toast-example-2')).show();</code>
          </p>
        </div>
      </div>
      <!-- END Default -->
    </div>
  </div>
  <!-- END Bootstrap Toasts -->

  <!-- Bootstrap Notify (.js-notify class is initialized in Helpers.jqNotify()) -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Bootstrap Notify</h3>
    </div>
    <div class="block-content">
      <!-- Info -->
      <h4 class="border-bottom pb-2">Info</h4>
      <div class="row items-push">
        <div class="col-lg-4">
          <p class="fs-sm text-muted">
            A notification with an informational message
          </p>
        </div>
        <div class="col-lg-8">
          <button type="button" class="js-notify btn btn-alt-info push" data-type="info" data-icon="fa fa-fw fa-info-circle me-1" data-message="Congrats! You've reached level 12!">
            <i class="fa fa-bell me-1 opacity-50"></i> Launch Notification
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>One.helpers('jq-notify', {type: 'info', icon: 'fa fa-info-circle me-1', message: 'Your message!'});</code>
          </p>
        </div>
      </div>
      <!-- END Info -->

      <!-- Success -->
      <h4 class="border-bottom pb-2">Success</h4>
      <div class="row items-push">
        <div class="col-lg-4">
          <p class="fs-sm text-muted">
            A notification with a success message
          </p>
        </div>
        <div class="col-lg-8">
          <button type="button" class="js-notify btn btn-alt-success push" data-type="success" data-icon="fa fa-fw fa-check me-1" data-message="App was updated successfully to 1.2 version">
            <i class="fa fa-bell me-1 opacity-50"></i> Launch Notification
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>One.helpers('jq-notify', {type: 'success', icon: 'fa fa-check me-1', message: 'Your message!'});</code>
          </p>
        </div>
      </div>
      <!-- END Success -->

      <!-- Warning -->
      <h4 class="border-bottom pb-2">Warning</h4>
      <div class="row items-push">
        <div class="col-lg-4">
          <p class="fs-sm text-muted">
            A notification with a warning message
          </p>
        </div>
        <div class="col-lg-8">
          <button type="button" class="js-notify btn btn-alt-warning push" data-type="warning" data-icon="fa fa-fw fa-exclamation-triangle me-1" data-message="Please make a backup before updating!">
            <i class="fa fa-bell me-1 opacity-50"></i> Launch Notification
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>One.helpers('jq-notify', {type: 'warning', icon: 'fa fa-exclamation me-1', message: 'Your message!'});</code>
          </p>
        </div>
      </div>
      <!-- END Warning -->

      <!-- Error -->
      <h4 class="border-bottom pb-2">Error</h4>
      <div class="row items-push">
        <div class="col-lg-4">
          <p class="fs-sm text-muted">
            A notification with an error message
          </p>
        </div>
        <div class="col-lg-8">
          <button type="button" class="js-notify btn btn-alt-danger push" data-type="danger" data-icon="fa fa-fw fa-times me-1" data-message="Update failed! :-(">
            <i class="fa fa-bell me-1 opacity-50"></i> Launch Notification
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>One.helpers('jq-notify', {type: 'danger', icon: 'fa fa-times me-1', message: 'Your message!'});</code>
          </p>
        </div>
      </div>
      <!-- END Error -->

      <!-- Position -->
      <h4 class="border-bottom pb-2">Position</h4>
      <div class="row items-push">
        <div class="col-lg-4">
          <p class="fs-sm text-muted">
            You can show your notification in multiple screen positions
          </p>
        </div>
        <div class="col-lg-8">
          <button type="button" class="js-notify btn btn-alt-primary push" data-message="Your message!">
            <i class="fa fa-bell me-1 opacity-50"></i> Top Right
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p class="mb-5">
            <code>One.helpers('jq-notify', {message: 'Your message!'});</code>
          </p>
          <button type="button" class="js-notify btn btn-alt-primary push" data-align="center" data-message="Your message!">
            <i class="fa fa-bell me-1 opacity-50"></i> Top Center
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p class="mb-5">
            <code>One.helpers('jq-notify', {align: 'center', message: 'Your message!'});</code>
          </p>
          <button type="button" class="js-notify btn btn-alt-primary push" data-align="left" data-message="Your message!">
            <i class="fa fa-bell me-1 opacity-50"></i> Top Left
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p class="mb-5">
            <code>One.helpers('jq-notify', {align: 'left', message: 'Your message!'});</code>
          </p>
          <button type="button" class="js-notify btn btn-alt-primary push" data-from="bottom" data-message="Your message!">
            <i class="fa fa-bell me-1 opacity-50"></i> Bottom Right
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p class="mb-5">
            <code>One.helpers('jq-notify', {from: 'bottom', message: 'Your message!'});</code>
          </p>
          <button type="button" class="js-notify btn btn-alt-primary push" data-from="bottom" data-align="center" data-message="Your message!">
            <i class="fa fa-bell me-1 opacity-50"></i> Bottom Center
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p class="mb-5">
            <code>One.helpers('jq-notify', {from: 'bottom', align: 'center', message: 'Your message!'});</code>
          </p>
          <button type="button" class="js-notify btn btn-alt-primary push" data-from="bottom" data-align="left" data-message="Your message!">
            <i class="fa fa-bell me-1 opacity-50"></i> Bottom Left
          </button>
          <p class="fw-semibold mb-0">
            You can also trigger it with JS:
          </p>
          <p>
            <code>One.helpers('jq-notify', {from: 'bottom', align: 'left', message: 'Your message!'});</code>
          </p>
        </div>
      </div>
      <!-- END Position -->
    </div>
  </div>
  <!-- END Bootstrap Notify -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for Bootstrap Notify plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/bootstrap-notify/bootstrap-notify.min.js'); ?>

<!-- Page JS Helpers (BS Notify Plugin) -->
<script>One.helpersOnLoad(['jq-notify']);</script>

<?php require 'inc/_global/views/footer_end.php'; ?>
