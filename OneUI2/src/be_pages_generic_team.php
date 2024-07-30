<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero Content -->
<div class="bg-primary-dark">
  <div class="content content-full text-center pt-7 pb-5">
    <h1 class="h2 text-white mb-2">
      Get to know us.
    </h1>
    <h2 class="h4 fw-normal text-white-75">
      Meet our passionate team, one at a time.
    </h2>
  </div>
</div>
<!-- END Hero Content -->

<!-- Page Content -->
<div class="content content-boxed">
  <div class="row">
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('male'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo15.jpg');">
          <?php $one->get_avatar(12, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('female'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo2.jpg');">
          <?php $one->get_avatar(2, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('male'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo3.jpg');">
          <?php $one->get_avatar(10, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('female'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo4.jpg');">
          <?php $one->get_avatar(1, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('male'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo6.jpg');">
          <?php $one->get_avatar(13, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('female'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo7.jpg');">
          <?php $one->get_avatar(4, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('female'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo12.jpg');">
          <?php $one->get_avatar(3, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-sm-6 col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('male'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo8.jpg');">
          <?php $one->get_avatar(16, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
    <div class="col-xl-4">
      <!-- Team Member -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">
            <?php $one->get_name('female'); ?>
          </h3>
          <div class="block-options">
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-dribbble"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-twitter"></i>
            </a>
            <a class="btn-block-option" href="javascript:void(0)">
              <i class="si si-social-facebook"></i>
            </a>
          </div>
        </div>
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo9.jpg');">
          <?php $one->get_avatar(5, '', 96, true); ?>
        </div>
        <div class="block-content fs-sm">
          <?php $one->get_text('small'); ?>
        </div>
      </div>
      <!-- END Team Member -->
    </div>
  </div>
</div>
<!-- END Page Content -->

<!-- We are hiring -->
<div class="bg-body-dark">
  <div class="content content-full text-center py-6">
    <h3 class="h4 font-bold mb-4">
      Would you like to be part of our team?
    </h3>
    <a class="btn btn-primary px-4 py-2" href="javascript:void(0)">We are hiring!</a>
  </div>
</div>
<!-- END We are hiring -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
