<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Page Content -->
<div class="bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/photos/photo14@2x.jpg');">
  <div class="hero-static d-flex align-items-center bg-primary-dark-op">
    <div class="content">
      <div class="row justify-content-center push">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <!-- Unlock Block -->
          <div class="block block-rounded shadow-none mb-0">
            <div class="block-header block-header-default">
              <h3 class="block-title">Account Locked</h3>
              <div class="block-options">
                <a class="btn-block-option" href="op_auth_signin.php" data-bs-toggle="tooltip" data-bs-placement="left" title="Sign In with another account">
                  <i class="fa fa-sign-in-alt"></i>
                </a>
              </div>
            </div>
            <div class="block-content">
              <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5 text-center">
                <?php $one->get_avatar(10, '', 96); ?>
                <p class="fw-semibold my-2">
                  user@example.com
                </p>

                <!-- Unlock Form -->
                <!-- jQuery Validation (.js-validation-lock class is initialized in js/pages/op_auth_lock.min.js which was auto compiled from _js/pages/op_auth_lock.js) -->
                <!-- For more info and examples you can check out https://github.com/jzaefferer/jquery-validation -->
                <form class="js-validation-lock mt-4" action="be_pages_auth_all.php" method="POST">
                  <div class="mb-4">
                    <input type="password" class="form-control form-control-lg form-control-alt" id="lock-password" name="lock-password" placeholder="Password..">
                  </div>
                  <div class="row justify-content-center mb-4">
                    <div class="col-md-6 col-xl-5">
                      <button type="submit" class="btn w-100 btn-alt-success">
                        <i class="fa fa-fw fa-lock-open me-1 opacity-50"></i> Unlock
                      </button>
                    </div>
                  </div>
                </form>
                <!-- END Unlock Form -->
              </div>
            </div>
          </div>
          <!-- END Unlock Block -->
        </div>
      </div>
      <div class="fs-sm text-center text-white">
        <span class="fw-medium"><?php echo $one->name . ' ' . $one->version; ?></span> &copy; <span data-toggle="year-copy"></span>
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
