<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/raty-js/jquery.raty.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Rating
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Adding rating functionality to your pages has never been easier.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Rating
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<!-- jQuery Raty demo functionality is initialized in js/pages/be_comp_rating.min.js which was auto compiled from _js/pages/be_comp_rating.js -->
<!-- For more info and examples you can check out https://github.com/wbotelhos/raty -->
<div class="content">
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">jQuery Raty</h3>
    </div>
    <div class="block-content">
      <div class="row items-push-2x">
        <div class="col-md-6">
          <!-- Simple -->
          <h4 class="border-bottom pb-2">Simple</h4>
          <p class="fs-sm text-muted mb-2">
            Setting up rating is just a class away
          </p>
          <div class="js-rating"></div>
          <!-- END Simple -->
        </div>
        <div class="col-md-6">
          <!-- Predefined Score -->
          <h4 class="border-bottom pb-2">Predefined Score</h4>
          <p class="fs-sm text-muted mb-2">
            You can easily set a default score
          </p>
          <div class="js-rating" data-score="3"></div>
          <!-- END Predefined Score -->
        </div>
        <div class="col-md-6">
          <!-- More Stars -->
          <h4 class="border-bottom pb-2">More Stars</h4>
          <p class="fs-sm text-muted mb-2">
            You can easily set the number of stars
          </p>
          <div class="js-rating push" data-score="5" data-number="10"></div>
          <!-- END More Stars -->
        </div>
        <div class="col-md-6">
          <!-- Reset Button -->
          <h4 class="border-bottom pb-2">Reset Button</h4>
          <p class="fs-sm text-muted mb-2">
            You can also add a reset button to your rating
          </p>
          <div class="js-rating push" data-cancel="true" data-score="3"></div>
          <!-- END Reset Button -->
        </div>
        <div class="col-md-6">
          <!-- Hint Text -->
          <h4 class="border-bottom pb-2">Hint Text</h4>
          <p class="fs-sm text-muted mb-2">
            You can use a hint text when hovering the icons
          </p>
          <div class="js-rating" data-cancel="true" data-score="3" data-target=".js-rating-hint-text"></div>
          <div class="push">
            Hint: <span class="js-rating-hint-text fw-semibold">..</span>
          </div>
          <!-- END Hint Text -->
        </div>
        <div class="col-md-6">
          <!-- Color Variations -->
          <h4 class="border-bottom pb-2">Color Variations</h4>
          <p class="fs-sm text-muted mb-2">
            You can set the colors to what ever you like
          </p>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-star text-primary"></div>
          </div>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-star text-success"></div>
          </div>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-star text-danger"></div>
          </div>
          <!-- END Color Variations -->
        </div>
        <div class="col-md-6">
          <!-- Icon Variations -->
          <h4 class="border-bottom pb-2">Icon Variations</h4>
          <p class="fs-sm text-muted mb-2">
            You can also change the default icons to something else
          </p>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="si si-star me-1 text-success" data-star-off="si si-star me-1 text-muted"></div>
          </div>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-coffee text-info" data-star-off="fa fa-fw fa-thumbs-up text-muted"></div>
          </div>
          <div class="push mb-md-0">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-check text-primary" data-star-off="fa fa-fw fa-check text-muted"></div>
          </div>
          <!-- END Color Variations -->
        </div>
        <div class="col-md-6">
          <!-- Sizes Variations -->
          <h4 class="border-bottom pb-2">Sizes Variations</h4>
          <p class="fs-sm text-muted mb-2">
            Changing the size of the icons is also possible
          </p>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-rocket fs-sm text-success" data-star-off="fa fa-fw fa-rocket fs-sm text-muted"></div>
          </div>
          <div class="push">
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-2x fa-heart text-danger" data-star-off="fa fa-fw fa-2x fa-heart text-muted"></div>
          </div>
          <div>
            <div class="js-rating" data-score="3" data-star-on="fa fa-fw fa-3x fa-star text-warning" data-star-off="fa fa-fw fa-3x fa-star text-muted"></div>
          </div>
          <!-- END Sizes Variations -->
        </div>
      </div>
    </div>
  </div>
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for jQuery Raty plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/raty-js/jquery.raty.js'); ?>

<!-- Page JS Code -->
<?php $one->get_js('js/pages/be_comp_rating.min.js'); ?>

<?php require 'inc/_global/views/footer_end.php'; ?>
