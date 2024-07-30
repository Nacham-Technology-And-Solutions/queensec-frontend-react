<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/magnific-popup/magnific-popup.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero Content -->
<div class="bg-image" style="min-height: 600px; background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo14@2x.jpg');"></div>
<!-- END Hero Content -->

<!-- Page Content -->
<div class="bg-body-extra-light">
  <div class="content content-boxed">
    <div class="text-center fs-sm push">
      <h1 class="mt-3">Travel the world and feel alive.</h1>
      <span class="d-inline-block py-2 px-4 bg-body-light rounded">
        <a class="link-effect fw-semibold" href="be_pages_generic_profile.php">John Doe</a> on July 16, 2019 &bull; <span>5 min</span>
      </span>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <!-- Story -->
        <article class="story">
          <?php $one->get_text('medium', 1); ?>

          <!-- Magnific Popup (.js-gallery class is initialized in Helpers.jqMagnific()) -->
          <!-- For more info and examples you can check out http://dimsemenov.com/plugins/magnific-popup/ -->
          <div class="row g-sm items-push js-gallery push img-fluid-100">
            <div class="col-6 animated fadeIn">
              <a class="img-link img-link-simple img-link-zoom-in img-lightbox" href="<?php echo $one->assets_folder; ?>/media/photos/photo19@2x.jpg">
                <?php $one->get_photo(19, false, 'img-fluid'); ?>
              </a>
            </div>
            <div class="col-6 animated fadeIn">
              <a class="img-link img-link-simple img-link-zoom-in img-lightbox" href="<?php echo $one->assets_folder; ?>/media/photos/photo12@2x.jpg">
                <?php $one->get_photo(12, false, 'img-fluid'); ?>
              </a>
            </div>
          </div>
          <!-- END Gallery -->

          <?php $one->get_text('medium'); ?>

          <h3 class="fw-normal mt-5 mb-3">Experiences</h3>
          <?php $one->get_text('large'); ?>

          <h3 class="fw-normal mt-5 mb-3">Exploring</h3>
          <?php $one->get_text('medium'); ?>

          <!-- Magnific Popup (.js-gallery class is initialized in Helpers.jqMagnific()) -->
          <!-- For more info and examples you can check out http://dimsemenov.com/plugins/magnific-popup/ -->
          <div class="row g-sm items-push js-gallery push img-fluid-100">
            <div class="col-12 animated fadeIn">
              <a class="img-link img-link-simple img-link-zoom-in img-lightbox" href="<?php echo $one->assets_folder; ?>/media/photos/photo18@2x.jpg">
                <?php $one->get_photo(18, true, 'img-fluid'); ?>
              </a>
            </div>
            <div class="col-6 animated fadeIn">
              <a class="img-link img-link-simple img-link-zoom-in img-lightbox" href="<?php echo $one->assets_folder; ?>/media/photos/photo16@2x.jpg">
                <?php $one->get_photo(16, false, 'img-fluid'); ?>
              </a>
            </div>
            <div class="col-6 animated fadeIn">
              <a class="img-link img-link-simple img-link-zoom-in img-lightbox" href="<?php echo $one->assets_folder; ?>/media/photos/photo14@2x.jpg">
                <?php $one->get_photo(14, false, 'img-fluid'); ?>
              </a>
            </div>
          </div>
          <!-- END Gallery -->

          <?php $one->get_text('medium'); ?>

          <h3 class="fw-normal mt-5 mb-3">Memories</h3>
          <?php $one->get_text('medium'); ?>
        </article>
        <!-- END Story -->

        <!-- Actions -->
        <div class="mt-5 d-flex justify-content-between push">
          <a class="btn btn-alt-primary" href="javascript:void(0)">
            <i class="fa fa-heart me-1"></i> Recommend
          </a>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-alt-secondary" data-bs-toggle="tooltip" title="Like Story">
              <i class="fa fa-thumbs-up"></i>
            </button>
            <div class="btn-group">
              <button type="button" class="btn btn-alt-secondary dropdown-toggle" id="dropdown-blog-story" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-share-alt me-1"></i> Share
              </button>
              <div class="dropdown-menu dropdown-menu-end fs-sm" aria-labelledby="dropdown-blog-story">
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="fab fa-fw fa-facebook me-1"></i> Facebook
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="fab fa-fw fa-twitter me-1"></i> Twitter
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="fab fa-fw fa-google-plus me-1"></i> Google+
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="fab fa-fw fa-linkedin me-1"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- END Actions -->
      </div>
    </div>
  </div>
</div>
<!-- END Page Content -->

<!-- Get Started -->
<div class="content content-full">
  <div class="my-5 text-center">
    <h3 class="fw-bold mb-2">
      Do you like our stories?
    </h3>
    <h4 class="h5 fw-medium opacity-75">
      Sign up today and get access to over <strong>10,000</strong> inspiring stories!
    </h4>
    <a class="btn btn-primary px-4 py-2" href="javascript:void(0)">Get Started Today</a>
  </div>
</div>
<!-- END Get Started -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for Magnific Popup plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/magnific-popup/jquery.magnific-popup.min.js'); ?>

<!-- Page JS Helpers (Magnific Popup Plugin) -->
<script>One.helpersOnLoad(['jq-magnific-popup']);</script>

<?php require 'inc/_global/views/footer_end.php'; ?>
