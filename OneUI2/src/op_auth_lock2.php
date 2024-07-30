<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Page Content -->
<div class="bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo14@2x.jpg');">
  <div class="hero-static d-flex align-items-center">
    <div class="w-100 bg-body-extra-light">
      <div class="content content-full">
        <!-- Unlock Section -->
        <div class="row g-0 justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">
            <!-- Header -->
            <div class="text-center">
              <p class="mb-2">
                <i class="fa fa-2x fa-circle-notch text-primary"></i>
              </p>
              <h1 class="h4 mb-1">
                Account Locked
              </h1>
              <p class="fw-medium text-muted mb-5">
                Please enter your password to unlock your account
              </p>
              <?php $one->get_avatar(10, '', 96); ?>
              <p class="fw-semibold text-center my-2">
                user@example.com
              </p>
            </div>
            <!-- END Header -->

            <!-- Unlock Form -->
            <!-- jQuery Validation (.js-validation-signin class is initialized in js/pages/op_auth_signin.min.js which was auto compiled from _js/pages/op_auth_signin.js) -->
            <!-- For more info and examples you can check out https://github.com/jzaefferer/jquery-validation -->
            <form class="js-validation-lock mt-4" action="be_pages_auth_all.php" method="POST">
              <div class="mb-4">
                <input type="password" class="form-control form-control-lg form-control-alt" id="lock-password" name="lock-password" placeholder="Password..">
              </div>
              <div class="row justify-content-center mb-4">
                <div class="col-lg-6 col-xxl-5">
                  <button type="submit" class="btn w-100 btn-alt-success">
                    <i class="fa fa-fw fa-lock-open me-1 opacity-50"></i> Unlock
                  </button>
                </div>
              </div>
            </form>
            <!-- END Unlock Form -->
          </div>
        </div>
        <!-- END Unlock Section -->

        <!-- Footer -->
        <div class="fs-sm text-center">
          <strong><?php echo $one->name . ' ' . $one->version; ?></strong> &copy; <span data-toggle="year-copy"></span>
        </div>
        <!-- END Footer -->
      </div>
    </div>    
  </div>
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for jQuery Validation plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/jquery-validation/jquery.validate.min.js'); ?>

<!-- Page JS Code -->
<?php $one->get_js('js/pages/op_auth_lock.min.js'); ?>

<?php require 'inc/_global/views/footer_end.php'; ?>
