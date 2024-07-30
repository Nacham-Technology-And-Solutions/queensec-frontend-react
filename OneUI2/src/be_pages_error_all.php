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
          Error Pages
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          All pages in one spot!
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="">Error Pages</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">All</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <div class="row">
    <div class="col-md-4">
      <!-- 400 -->
      <a class="block block-rounded block-link-shadow" href="op_error_400.php">
        <div class="block-content text-center">
          <div class="py-5">
            <p class="fs-1 text-default fw-semibold mb-0">
              400
            </p>
            <p class="fw-medium text-muted">
              Error Page
            </p>
          </div>
        </div>
      </a>
      <!-- END 400 -->
    </div>
    <div class="col-md-4">
      <!-- 401 -->
      <a class="block block-rounded block-link-shadow" href="op_error_401.php">
        <div class="block-content text-center">
          <div class="py-5">
            <p class="fs-1 text-amethyst fw-semibold mb-0">
              401
            </p>
            <p class="fw-medium text-muted">
              Error Page
            </p>
          </div>
        </div>
      </a>
      <!-- END 401 -->
    </div>
    <div class="col-md-4">
      <!-- 403 -->
      <a class="block block-rounded block-link-shadow" href="op_error_403.php">
        <div class="block-content text-center">
          <div class="py-5">
            <p class="fs-1 text-flat fw-semibold mb-0">
              403
            </p>
            <p class="fw-medium text-muted">
              Error Page
            </p>
          </div>
        </div>
      </a>
      <!-- END 403 -->
    </div>
    <div class="col-md-4">
      <!-- 404 -->
      <a class="block block-rounded block-link-shadow" href="op_error_404.php">
        <div class="block-content text-center">
          <div class="py-5">
            <p class="fs-1 text-city fw-semibold mb-0">
              404
            </p>
            <p class="fw-medium text-muted">
              Error Page
            </p>
          </div>
        </div>
      </a>
      <!-- END 404 -->
    </div>
    <div class="col-md-4">
      <!-- 500 -->
      <a class="block block-rounded block-link-shadow" href="op_error_500.php">
        <div class="block-content text-center">
          <div class="py-5">
            <p class="fs-1 text-modern fw-semibold mb-0">
              500
            </p>
            <p class="fw-medium text-muted">
              Error Page
            </p>
          </div>
        </div>
      </a>
      <!-- END 500 -->
    </div>
    <div class="col-md-4">
      <!-- 503 -->
      <a class="block block-rounded block-link-shadow" href="op_error_503.php">
        <div class="block-content text-center">
          <div class="py-5">
            <p class="fs-1 text-smooth fw-semibold mb-0">
              503
            </p>
            <p class="fw-medium text-muted">
              Error Page
            </p>
          </div>
        </div>
      </a>
      <!-- END 503 -->
    </div>
  </div>
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>