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
          Ribbons
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Easily add cool ribbons to your blocks.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Elements</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Ribbons
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Simple Ribbon -->
  <h2 class="content-heading">Simple Ribbon</h2>
  <div class="row">
    <div class="col-md-6 col-xl-3">
      <!-- Default Position -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary">
          <div class="ribbon-box">
            $28
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-html5 text-gray"></i>
            </p>
            <h4 class="mb-0">Learn HTML5</h4>
          </div>
        </div>
      </div>
      <!-- END Default Position -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Bottom Right -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-bottom">
          <div class="ribbon-box">
            $28
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-html5 text-gray"></i>
            </p>
            <h4 class="mb-0">Learn HTML5</h4>
          </div>
        </div>
      </div>
      <!-- END Bottom Right -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Bottom Left -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-left ribbon-bottom">
          <div class="ribbon-box">
            $28
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-html5 text-gray"></i>
            </p>
            <h4 class="mb-0">Learn HTML5</h4>
          </div>
        </div>
      </div>
      <!-- END Bottom Left -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Top Left -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-left">
          <div class="ribbon-box">
            $28
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-html5 text-gray"></i>
            </p>
            <h4 class="mb-0">Learn HTML5</h4>
          </div>
        </div>
      </div>
      <!-- END Top Left -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Success Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-success">
          <div class="ribbon-box">
            $32
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-css3 text-gray"></i>
            </p>
            <h4 class="mb-0">Discover CSS3</h4>
          </div>
        </div>
      </div>
      <!-- END Success Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Info Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-info">
          <div class="ribbon-box">
            $32
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-css3 text-gray"></i>
            </p>
            <h4 class="mb-0">Discover CSS3</h4>
          </div>
        </div>
      </div>
      <!-- END Info Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Warning Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-warning">
          <div class="ribbon-box">
            $32
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-css3 text-gray"></i>
            </p>
            <h4 class="mb-0">Discover CSS3</h4>
          </div>
        </div>
      </div>
      <!-- END Warning Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Danger Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-danger">
          <div class="ribbon-box">
            $32
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fab fa-3x fa-css3 text-gray"></i>
            </p>
            <h4 class="mb-0">Discover CSS3</h4>
          </div>
        </div>
      </div>
      <!-- END Danger Color -->
    </div>
    <div class="col-md-6">
      <!-- Glass on Background Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full bg-primary ribbon ribbon-glass">
          <div class="ribbon-box">
            <i class="fa fa-check me-1"></i> Crystal
          </div>
          <div class="text-center py-6">
            <h4 class="text-white mb-0">Awesome Color</h4>
          </div>
        </div>
      </div>
      <!-- END Glass on Background Color -->
    </div>
    <div class="col-md-6">
      <!-- Glass on Background Image -->
      <div class="block block-rounded">
        <div class="bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo25.jpg');">
          <div class="block-content block-content-full bg-black-50 ribbon ribbon-glass">
            <div class="ribbon-box">
              <i class="fa fa-check"></i>
            </div>
            <div class="text-center py-6">
              <h4 class="fw-semibold text-white mb-0">Awesome Image</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- END Glass on Background Image -->
    </div>
  </div>
  <!-- END Simple Ribbon -->

  <!-- Bookmark Ribbon -->
  <h2 class="content-heading">Bookmark Ribbon</h2>
  <div class="row">
    <div class="col-md-6 col-xl-3">
      <!-- Default Position -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-bookmark">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-cog text-gray"></i>
            </p>
            <h4 class="mb-0">Settings</h4>
          </div>
        </div>
      </div>
      <!-- END Default Position -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Bottom Right -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-bottom ribbon-bookmark">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-cog text-gray"></i>
            </p>
            <h4 class="mb-0">Settings</h4>
          </div>
        </div>
      </div>
      <!-- END Bottom Right -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Bottom Left -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-left ribbon-bottom ribbon-bookmark">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-cog text-gray"></i>
            </p>
            <h4 class="mb-0">Settings</h4>
          </div>
        </div>
      </div>
      <!-- END Bottom Left -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Top Left -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-left ribbon-bookmark ribbon-primary">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-cog text-gray"></i>
            </p>
            <h4 class="mb-0">Settings</h4>
          </div>
        </div>
      </div>
      <!-- END Top Left -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Success Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-bookmark ribbon-success">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-wrench text-gray"></i>
            </p>
            <h4 class="mb-0">Options</h4>
          </div>
        </div>
      </div>
      <!-- END Success Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Info Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-bookmark ribbon-info">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-wrench text-gray"></i>
            </p>
            <h4 class="mb-0">Options</h4>
          </div>
        </div>
      </div>
      <!-- END Info Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Warning Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-bookmark ribbon-warning">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-wrench text-gray"></i>
            </p>
            <h4 class="mb-0">Options</h4>
          </div>
        </div>
      </div>
      <!-- END Warning Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Danger Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-bookmark ribbon-danger">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-wrench text-gray"></i>
            </p>
            <h4 class="mb-0">Options</h4>
          </div>
        </div>
      </div>
      <!-- END Danger Color -->
    </div>
    <div class="col-md-6">
      <!-- Glass on Background Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full bg-primary ribbon ribbon-bookmark ribbon-glass">
          <div class="ribbon-box">
            <i class="fa fa-check me-1"></i> Crystal
          </div>
          <div class="text-center py-6">
            <h4 class="text-white mb-0">Awesome Color</h4>
          </div>
        </div>
      </div>
      <!-- END Glass on Background Color -->
    </div>
    <div class="col-md-6">
      <!-- Glass on Background Image -->
      <div class="block block-rounded">
        <div class="bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo25.jpg');">
          <div class="block-content block-content-full bg-black-50 ribbon ribbon-bookmark ribbon-glass">
            <div class="ribbon-box">
              <i class="fa fa-check"></i>
            </div>
            <div class="text-center py-6">
              <h4 class="fw-semibold text-white mb-0">Awesome Image</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- END Glass on Background Image -->
    </div>
  </div>
  <!-- END Bookmark Ribbon -->

  <!-- Modern Ribbon -->
  <h2 class="content-heading">Modern Ribbon</h2>
  <div class="row">
    <div class="col-md-6 col-xl-3">
      <!-- Default Position -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-modern">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-copy text-gray"></i>
            </p>
            <h4 class="mb-0">Files</h4>
          </div>
        </div>
      </div>
      <!-- END Default Position -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Bottom Right -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-bottom ribbon-modern">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-copy text-gray"></i>
            </p>
            <h4 class="mb-0">Files</h4>
          </div>
        </div>
      </div>
      <!-- END Bottom Right -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Bottom Left -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-left ribbon-bottom ribbon-modern">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-copy text-gray"></i>
            </p>
            <h4 class="mb-0">Files</h4>
          </div>
        </div>
      </div>
      <!-- END Bottom Left -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Top Left -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-primary ribbon-left ribbon-modern">
          <div class="ribbon-box">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-copy text-gray"></i>
            </p>
            <h4 class="mb-0">Files</h4>
          </div>
        </div>
      </div>
      <!-- END Top Left -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Success Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-modern ribbon-success">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-image text-gray"></i>
            </p>
            <h4 class="mb-0">Photos</h4>
          </div>
        </div>
      </div>
      <!-- END Success Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Info Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-modern ribbon-info">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-image text-gray"></i>
            </p>
            <h4 class="mb-0">Photos</h4>
          </div>
        </div>
      </div>
      <!-- END Info Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Warning Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-modern ribbon-warning">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-image text-gray"></i>
            </p>
            <h4 class="mb-0">Photos</h4>
          </div>
        </div>
      </div>
      <!-- END Warning Color -->
    </div>
    <div class="col-md-6 col-xl-3">
      <!-- Danger Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full ribbon ribbon-modern ribbon-danger">
          <div class="ribbon-box">
            <i class="fa fa-fw fa-heart"></i>
          </div>
          <div class="text-center py-4">
            <p>
              <i class="far fa-3x fa-image text-gray"></i>
            </p>
            <h4 class="mb-0">Photos</h4>
          </div>
        </div>
      </div>
      <!-- END Danger Color -->
    </div>
    <div class="col-md-6">
      <!-- Glass on Background Color -->
      <div class="block block-rounded">
        <div class="block-content block-content-full bg-primary ribbon ribbon-modern ribbon-glass">
          <div class="ribbon-box">
            <i class="fa fa-check me-1"></i> Crystal
          </div>
          <div class="text-center py-6">
            <h4 class="text-white mb-0">Awesome Color</h4>
          </div>
        </div>
      </div>
      <!-- END Glass on Background Color -->
    </div>
    <div class="col-md-6">
      <!-- Glass on Background Image -->
      <div class="block block-rounded">
        <div class="bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo25.jpg');">
          <div class="block-content block-content-full bg-black-50 ribbon ribbon-modern ribbon-bottom ribbon-glass">
            <div class="ribbon-box">
              <i class="fa fa-check"></i>
            </div>
            <div class="text-center py-6">
              <h4 class="fw-semibold text-white mb-0">Awesome Image</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- END Glass on Background Image -->
    </div>
  </div>
  <!-- END Modern Ribbon -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
