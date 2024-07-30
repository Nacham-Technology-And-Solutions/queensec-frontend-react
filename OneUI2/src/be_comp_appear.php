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
          Appear
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Animate elements and make them visible on scrolling.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Appear
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<!-- Appear ([data-toggle="appear"] is initialized in Helpers.jqAppear()) -->
<!-- For more info and examples you can check out https://github.com/bas2k/jquery.appear -->
<div class="content">
  <h2 class="content-heading">Basic</h2>
  <div class="row">
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-primary text-white mx-auto">
              <i class="fa fa-2x fa-brush"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Create</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-success text-white mx-auto">
              <i class="fab fa-2x fa-bitcoin"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Bitcoin</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-dark text-white mx-auto">
              <i class="fab fa-2x fa-chrome"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Browser</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Appear -->

  <!-- Animation Classes -->
  <h2 class="content-heading">Animated <small>You can use the animation classes of your choice</small></h2>
  <div class="row">
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-class="animated bounceIn">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-warning text-white mx-auto">
              <i class="si fa-2x si-user"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Users</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-class="animated flipInX">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-danger text-white mx-auto">
              <i class="si fa-2x si-settings"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Settings</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-class="animated flash">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-info text-white mx-auto">
              <i class="si fa-2x fa-2x si-rocket"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Startup</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Animation Classes -->

  <!-- Offset -->
  <h2 class="content-heading">Offset <small>You can add an offset, to make the element appear sooner or later</small></h2>
  <div class="row">
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-offset="-200">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-danger-light text-danger mx-auto">
              <i class="si fa-2x si-lock"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Lock</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-offset="200">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-warning-light text-warning mx-auto">
              <i class="si fa-2x si-energy"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Energy</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-offset="-400">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-info-light text-info mx-auto">
              <i class="si fa-2x si-calendar"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Events</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Offset -->

  <!-- Timeouts -->
  <h2 class="content-heading">Timeouts <small>You can delay the animation, creating nice effects</small></h2>
  <div class="row">
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-offset="-200">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-body-light text-primary mx-auto">
              <i class="si fa-2x si-speedometer"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Dashboard</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-offset="-200" data-timeout="200">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-body-light text-danger mx-auto">
              <i class="si fa-2x si-printer"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Print</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="block block-rounded invisible" data-toggle="appear" data-offset="-200" data-timeout="400">
        <div class="block-content block-content-full">
          <div class="py-5 text-center">
            <div class="item item-2x item-rounded bg-body-light text-success mx-auto">
              <i class="si fa-2x si-envelope-open"></i>
            </div>
            <div class="fs-4 fw-semibold pt-3 mb-0">Messages</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Timeouts -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for jQuery Appear plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/jquery-appear/jquery.appear.min.js'); ?>

<!-- Page JS Helpers (jQuery Appear plugin) -->
<script>One.helpersOnLoad(['jq-appear']);</script>

<?php require 'inc/_global/views/footer_end.php'; ?>
