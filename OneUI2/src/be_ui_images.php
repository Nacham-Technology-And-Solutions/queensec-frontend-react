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
          Images Overlay
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Add extra options on hover to your images.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Elements</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
          Images Overlay
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Image Default -->
  <h2 class="content-heading">Image Default</h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container">
        <?php $one->get_photo(1, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container">
        <?php $one->get_photo(1, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container">
        <?php $one->get_photo(1, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Image Default -->

  <!-- Image Zoom In -->
  <h2 class="content-heading">Image Zoom In <small><code class="text-lowercase">.fx-item-zoom-in</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in">
        <?php $one->get_photo(2, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in">
        <?php $one->get_photo(2, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in">
        <?php $one->get_photo(2, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Image Zoom In -->

  <!-- Image Rotate Right -->
  <h2 class="content-heading">Image Rotate Right <small><code class="text-lowercase">.fx-item-rotate-r</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-rotate-r">
        <?php $one->get_photo(3, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-rotate-r">
        <?php $one->get_photo(3, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-rotate-r">
        <?php $one->get_photo(3, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Image Rotate Right -->

  <!-- Image Rotate Left -->
  <h2 class="content-heading">Image Rotate Left <small><code class="text-lowercase">.fx-item-rotate-l</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-rotate-l">
        <?php $one->get_photo(4, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-rotate-l">
        <?php $one->get_photo(4, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-rotate-l">
        <?php $one->get_photo(4, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Image Rotate Left -->

  <!-- Options Slide Left -->
  <h2 class="content-heading">Overlay Slide Left <small><code class="text-lowercase">.fx-overlay-slide-left</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-left">
        <?php $one->get_photo(12, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-left">
        <?php $one->get_photo(12, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-left">
        <?php $one->get_photo(12, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Options Slide Left -->

  <!-- Options Slide Right -->
  <h2 class="content-heading">Overlay Slide Right <small><code class="text-lowercase">.fx-overlay-slide-right</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-right">
        <?php $one->get_photo(16, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-right">
        <?php $one->get_photo(16, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-right">
        <?php $one->get_photo(16, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Options Slide Right -->

  <!-- Options Slide Down -->
  <h2 class="content-heading">Overlay Slide Down <small><code class="text-lowercase">.fx-overlay-slide-down</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-down">
        <?php $one->get_photo(7, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-down">
        <?php $one->get_photo(7, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-down">
        <?php $one->get_photo(7, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Options Slide Down -->

  <!-- Options Slide Top -->
  <h2 class="content-heading">Overlay Slide Top <small><code class="text-lowercase">.fx-overlay-slide-top</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-top">
        <?php $one->get_photo(8, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-top">
        <?php $one->get_photo(8, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-slide-top">
        <?php $one->get_photo(8, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Options Slide Top -->

  <!-- Options Zoom In -->
  <h2 class="content-heading">Overlay Zoom In <small><code class="text-lowercase">.fx-overlay-zoom-in</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-zoom-in">
        <?php $one->get_photo(21, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-zoom-in">
        <?php $one->get_photo(21, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-zoom-in">
        <?php $one->get_photo(21, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Options Zoom In -->

  <!-- Options Zoom Out -->
  <h2 class="content-heading">Overlay Zoom Out <small><code class="text-lowercase">.fx-overlay-zoom-out</code></small></h2>
  <div class="row items-push">
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-zoom-out">
        <?php $one->get_photo(10, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-black-75">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-zoom-out">
        <?php $one->get_photo(10, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-white-90">
          <div class="options-overlay-content">
            <h3 class="h4 text-gray-darker mb-2">Image Caption</h3>
            <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-pencil-alt text-primary me-1"></i> Edit
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-times text-danger me-1"></i> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 animated fadeIn">
      <div class="options-container fx-item-zoom-in fx-overlay-zoom-out">
        <?php $one->get_photo(10, false, 'img-fluid options-item'); ?>
        <div class="options-overlay bg-primary-dark-op">
          <div class="options-overlay-content">
            <h3 class="h4 text-white mb-2">Image Caption</h3>
            <h4 class="h6 text-white-75 fw-normal mb-3">Some Extra Info</h4>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-thumbs-up text-success me-1"></i> Like
            </a>
            <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
              <i class="fa fa-save text-info me-1"></i> Save
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Options Zoom Out -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
