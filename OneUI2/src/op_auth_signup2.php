<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Page Content -->
<div class="hero-static d-flex align-items-center">
  <div class="w-100">
    <!-- Sign Up Section -->
    <div class="bg-body-extra-light">
      <div class="content content-full">
        <div class="row g-0 justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">
            <!-- Header -->
            <div class="text-center">
              <p class="mb-2">
                <i class="fa fa-2x fa-circle-notch text-primary"></i>
              </p>
              <h1 class="h4  mb-1">
                Create Account
              </h1>
              <p class="text-muted mb-3">
                Get your access today in one easy step
              </p>
            </div>
            <!-- END Header -->

            <!-- Sign Up Form -->
            <!-- jQuery Validation (.js-validation-signup class is initialized in js/pages/op_auth_signup.min.js which was auto compiled from _js/pages/op_auth_signup.js) -->
            <!-- For more info and examples you can check out https://github.com/jzaefferer/jquery-validation -->
            <form class="js-validation-signup" action="be_pages_auth_all.php" method="POST">
              <div class="py-3">
                <div class="mb-4">
                  <input type="text" class="form-control form-control-lg form-control-alt" id="signup-username" name="signup-username" placeholder="Username">
                </div>
                <div class="mb-4">
                  <input type="email" class="form-control form-control-lg form-control-alt" id="signup-email" name="signup-email" placeholder="Email">
                </div>
                <div class="mb-4">
                  <input type="password" class="form-control form-control-lg form-control-alt" id="signup-password" name="signup-password" placeholder="Password">
                </div>
                <div class="mb-4">
                  <input type="password" class="form-control form-control-lg form-control-alt" id="signup-password-confirm" name="signup-password-confirm" placeholder="Confirm Password">
                </div>
                <div class="mb-4">
                  <div class="d-md-flex align-items-md-center justify-content-md-between">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="signup-terms" name="signup-terms">
                      <label class="form-check-label" for="signup-terms">I agree to Terms &amp; Conditions</label>
                    </div>
                    <div class="py-2">
                      <a class="fs-sm fw-medium" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#one-signup-terms">View Terms</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-xxl-5">
                  <button type="submit" class="btn w-100 btn-alt-success">
                    <i class="fa fa-fw fa-plus me-1 opacity-50"></i> Sign Up
                  </button>
                </div>
              </div>
            </form>
            <!-- END Sign Up Form -->
          </div>
        </div>
      </div>
    </div>
    <!-- END Sign Up Section -->

    <!-- Footer -->
    <div class="fs-sm text-center text-muted py-3">
      <strong><?php echo $one->name . ' ' . $one->version; ?></strong> &copy; <span data-toggle="year-copy"></span>
    </div>
    <!-- END Footer -->
  </div>

  <!-- Terms Modal -->
  <div class="modal fade" id="one-signup-terms" tabindex="-1" role="dialog" aria-labelledby="one-signup-terms" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-popout" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Terms &amp; Conditions</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content">
            <?php $one->get_text('small', 5); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">I Agree</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Terms Modal -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for jQuery Validation plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/jquery-validation/jquery.validate.min.js'); ?>

<!-- Page JS Code -->
<?php $one->get_js('js/pages/op_auth_signup.min.js'); ?>

<?php require 'inc/_global/views/footer_end.php'; ?>
