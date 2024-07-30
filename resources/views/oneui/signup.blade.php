<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title>OneUI - Bootstrap 5 Admin Template &amp; UI Framework</title>

    <meta name="description" content="OneUI - Bootstrap 5 Admin Template &amp; UI Framework created by pixelcave and published on Themeforest">
    <meta name="author" content="pixelcave">
    <meta name="robots" content="noindex, nofollow">

    <!-- Open Graph Meta -->
    <meta property="og:title" content="OneUI - Bootstrap 5 Admin Template &amp; UI Framework">
    <meta property="og:site_name" content="OneUI">
    <meta property="og:description" content="OneUI - Bootstrap 5 Admin Template &amp; UI Framework created by pixelcave and published on Themeforest">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">

    <!-- Icons -->
    <!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
    <link rel="shortcut icon" href="assets/media/favicons/favicon.png">
    <link rel="icon" type="image/png" sizes="192x192" href="assets/media/favicons/favicon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/media/favicons/apple-touch-icon-180x180.png">
    <!-- END Icons -->

    <!-- Stylesheets -->
    <!-- OneUI framework -->
    <link rel="stylesheet" id="css-main" href="assets/css/oneui.min.css">

    <!-- You can include a specific file from css/themes/ folder to alter the default color theme of the template. eg: -->
    <!-- <link rel="stylesheet" id="css-theme" href="assets/css/themes/amethyst.min.css"> -->
    <!-- END Stylesheets -->
  </head>

  <body>
    <!-- Page Container -->
    <!--
        Available classes for #page-container:

    GENERIC

      'remember-theme'                            Remembers active color theme and dark mode between pages using localStorage when set through
                                                  - Theme helper buttons [data-toggle="theme"],
                                                  - Layout helper buttons [data-toggle="layout" data-action="dark_mode_[on/off/toggle]"]
                                                  - ..and/or One.layout('dark_mode_[on/off/toggle]')

    SIDEBAR & SIDE OVERLAY

      'sidebar-r'                                 Right Sidebar and left Side Overlay (default is left Sidebar and right Side Overlay)
      'sidebar-mini'                              Mini hoverable Sidebar (screen width > 991px)
      'sidebar-o'                                 Visible Sidebar by default (screen width > 991px)
      'sidebar-o-xs'                              Visible Sidebar by default (screen width < 992px)
      'sidebar-dark'                              Dark themed sidebar

      'side-overlay-hover'                        Hoverable Side Overlay (screen width > 991px)
      'side-overlay-o'                            Visible Side Overlay by default

      'enable-page-overlay'                       Enables a visible clickable Page Overlay (closes Side Overlay on click) when Side Overlay opens

      'side-scroll'                               Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (screen width > 991px)

    HEADER

      ''                                          Static Header if no class is added
      'page-header-fixed'                         Fixed Header

    HEADER STYLE

      ''                                          Light themed Header
      'page-header-dark'                          Dark themed Header

    MAIN CONTENT LAYOUT

      ''                                          Full width Main Content if no class is added
      'main-content-boxed'                        Full width Main Content with a specific maximum width (screen width > 1200px)
      'main-content-narrow'                       Full width Main Content with a percentage width (screen width > 1200px)

    DARK MODE

      'sidebar-dark page-header-dark dark-mode'   Enable dark mode (light sidebar/header is not supported with dark mode)
    -->
    <div id="page-container">

      <!-- Main Container -->
      <main id="main-container">
        <!-- Page Content -->
        <div class="hero-static d-flex align-items-center">
          <div class="content">
            <div class="row justify-content-center push">
              <div class="col-md-8 col-lg-6 col-xl-4">
                <!-- Sign Up Block -->
                <div class="block block-rounded mb-0">
                  <div class="block-header block-header-default">
                    <h3 class="block-title">Create Account</h3>
                    <div class="block-options">
                      <a class="btn-block-option fs-sm" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#one-signup-terms">View Terms</a>
                      <a class="btn-block-option" href="{{route('login')}}" data-bs-toggle="tooltip" data-bs-placement="left" title="Sign In">
                        <i class="fa fa-sign-in-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div class="block-content">
                    <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                      <h1 class="h2 mb-1">Tax Payer Signup</h1>
                      <p class="fw-medium text-muted">
                        Please fill the following details to create a new account.
                      </p>

                      <!-- Sign Up Form -->
                      <!-- jQuery Validation (.js-validation-signup class is initialized in js/pages/op_auth_signup.min.js which was auto compiled from _js/pages/op_auth_signup.js) -->
                      <!-- For more info and examples you can check out https://github.com/jzaefferer/jquery-validation -->
                      <form class="js-validation-signup" action="be_pages_auth_all.html" method="POST">
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
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="signup-terms" name="signup-terms">
                              <label class="form-check-label" for="signup-terms">I agree to Terms &amp; Conditions</label>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-md-6 col-xl-5">
                            <button type="submit" class="btn w-100 btn-alt-success">
                              <i class="fa fa-fw fa-plus me-1 opacity-50"></i>SignUp</button>
                          </div>
                        </div>
                      </form>
                      <!-- END Sign Up Form -->
                    </div>
                  </div>
                </div>
                <!-- END Sign Up Block -->
              </div>
            </div>
            <div class="fs-sm text-muted text-center">
              <strong>VGIS</strong> &copy; <span data-toggle="year-copy"></span>
            </div>
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
                    <p>Terms and Conditions<br>

                      Welcome to Queensec Global Resources Limited's website. By accessing and using our website, you agree to the following terms and conditions:<br>
                      
                      1. Introduction: Queensec Global Resources Limited is an indigenous Mining Company with mineral title numbers EL-37554, EL-37555, SSML-42791, SSML-53454 for both coal and iron ore. Registered in Nigeria with a Certificate of Incorporation Number RC1455614 of 2017, the company is limited by shares and owned by a 3-man Board of Directors. The company operates under the laws of the Federal Republic of Nigeria.<br>
                      
                      2. Use of Website: By accessing our website, you agree to use it in a manner consistent with all applicable laws and regulations.<br>
                      
                      3. Intellectual Property*: All content on this website, including text, graphics, logos, and images, is the property of Queensec Global Resources Limited and is protected by applicable intellectual property laws.
                      <br>
                      4. Privacy: Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                      <br>
                      5. Limitation of Liability: Queensec Global Resources Limited will not be liable for any damages arising from the use or inability to use this website or any information contained on it.
                      <br>
                      6. Modifications: We reserve the right to modify these terms and conditions at any time. Your continued use of the website will signify your acceptance of any changes.
                      <br>
                      7. Governing Law: These terms and conditions are governed by the laws of the Federal Republic of Nigeria.
                      <br>
                      By using this website, you signify your acceptance of these terms and conditions. If you do not agree, please do not use our website.</p>
                  
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
      </main>
      <!-- END Main Container -->
    </div>
    <!-- END Page Container -->

    <!--
        OneUI JS

        Core libraries and functionality
        webpack is putting everything together at assets/_js/main/app.js
    -->
    <script src="assets/js/oneui.app.min.js"></script>

    <!-- jQuery (required for jQuery Validation plugin) -->
    <script src="assets/js/lib/jquery.min.js"></script>

    <!-- Page JS Plugins -->
    <script src="assets/js/plugins/jquery-validation/jquery.validate.min.js"></script>

    <!-- Page JS Code -->
    <script src="assets/js/pages/op_auth_signup.min.js"></script>
  </body>
</html>
