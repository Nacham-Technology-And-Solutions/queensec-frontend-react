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
          Tooltips
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Attach optional info to an element.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Elements</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Tooltips
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Bootstrap Tooltip (data-bs-toggle="tooltip" and .js-bs-tooltip class are initialized in Helpers.bsTooltip()) -->
  <!-- For advanced Tooltip usage you can check out https://getbootstrap.com/docs/5.2/components/tooltips/ -->

  <!-- Default -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Default</h3>
    </div>
    <div class="block-content">
      <p class="fs-sm text-muted">
        Show tooltips on hover
      </p>
      <div class="row items-push text-center">
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-primary w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Top Tooltip">Top</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-primary w-100" data-bs-toggle="tooltip" data-bs-placement="right" title="Right Tooltip">Right</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-primary w-100" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bottom Tooltip">Bottom</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-primary w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Left Tooltip">Left</button>
        </div>
      </div>
    </div>
  </div>
  <!-- END Default -->

  <!-- Click Triggered -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Click Triggered</h3>
    </div>
    <div class="block-content">
      <p class="fs-sm text-muted">
        Show your tooltips on click
      </p>
      <div class="row items-push text-center">
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="click" data-bs-placement="top" title="Top Tooltip">Top</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="click" data-bs-placement="right" title="Right Tooltip">Right</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="click" data-bs-placement="bottom" title="Bottom Tooltip">Bottom</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="click" data-bs-placement="left" title="Left Tooltip">Left</button>
        </div>
      </div>
    </div>
  </div>
  <!-- END Click Triggered -->

  <!-- Animation -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Animation</h3>
    </div>
    <div class="block-content">
      <p class="fs-sm text-muted">
        Show tooltips on hover
      </p>
      <div class="row items-push text-center">
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-animation="true" data-bs-placement="top" title="Top Tooltip">Top</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-animation="true" data-bs-placement="right" title="Right Tooltip">Right</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-animation="true" data-bs-placement="bottom" title="Bottom Tooltip">Bottom</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-animation="true" data-bs-placement="left" title="Left Tooltip">Left</button>
        </div>
      </div>
    </div>
  </div>
  <!-- END Animation -->

  <!-- HTML -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">HTML</h3>
    </div>
    <div class="block-content">
      <p class="fs-sm text-muted">
        You can add HTML in your tooltips as well
      </p>
      <div class="row items-push text-center">
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="top" title="<img class='img-avatar' src='assets/media/avatars/avatar10.jpg' alt=''>">Top</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="right" title="<img class='img-avatar' src='assets/media/avatars/avatar2.jpg' alt=''>">Right</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom" title="<img class='img-avatar' src='assets/media/avatars/avatar5.jpg' alt=''>">Bottom</button>
        </div>
        <div class="col-sm-6 col-xl-3">
          <button type="button" class="btn btn-alt-primary w-100" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="left" title="<img class='img-avatar' src='assets/media/avatars/avatar16.jpg' alt=''>">Left</button>
        </div>
      </div>
    </div>
  </div>
  <!-- END HTML -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
