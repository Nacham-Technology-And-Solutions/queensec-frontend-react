<?php
/**
 * backend/views/inc_header_mega_menu.php
 *
 * Author: pixelcave
 *
 * An example header showcasing a mega menu
 *
 */
?>

<!-- Header -->
<header id="page-header">
  <!-- Header Content -->
  <div class="content-header">
    <!-- Left Section -->
    <div class="d-flex align-items-center">
      <!-- Toggle Sidebar -->
      <!-- Layout API, functionality initialized in Template._uiApiLayout()-->
      <button type="button" class="btn btn-sm btn-alt-secondary me-2 d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
        <i class="fa fa-fw fa-bars"></i>
      </button>
      <!-- END Toggle Sidebar -->
      
      <!-- Mega Menu -->
      <nav class="d-none d-lg-flex align-items-center space-x-2">
        <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
          <i class="fa fa-home opacity-50 me-1"></i>
          <span>Dashboard</span>
        </a>
        <div class="dropdown">
          <button class="btn btn-sm btn-alt-secondary" type="button" id="page-header-mega-menu-websites" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-globe-americas opacity-50 me-1"></i>
            <span>Websites</span>
            <i class="fa fa-fw fa-angle-down opacity-50"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-xxl dropdown-menu-mega p-0 border-0" aria-labelledby="page-header-mega-menu-websites">
            <div class="px-3 py-3 bg-primary rounded-top d-flex align-items-center justify-content-between">
              <h3 class="h5 fw-semibold text-white mb-0">
                My Projects
              </h3>
              <i class="fa fa-2x fa-globe-americas text-white opacity-25 ms-2"></i>
            </div>
            <div class="p-3">
              <div class="row g-3 fs-sm">
                <div class="col-xxl-4">
                  <a class="block block-transparent block-rounded block-bordered block-link-pop mb-0" href="javascript:void(0)">
                    <div class="block-content text-center">
                      <i class="fa fa-2x fa-globe-americas opacity-50"></i>
                      <p class="fw-medium mt-3">
                        example.com
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-xxl-4">
                  <a class="block block-transparent block-rounded block-bordered block-link-pop mb-0" href="javascript:void(0)">
                    <div class="block-content text-center">
                      <i class="fa fa-2x fa-globe-americas opacity-50"></i>
                      <p class="fw-medium mt-3">
                        example2.com
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-xxl-4">
                  <a class="block block-transparent block-rounded block-bordered block-link-pop mb-0" href="javascript:void(0)">
                    <div class="block-content text-center">
                      <i class="fa fa-2x fa-globe-americas opacity-50"></i>
                      <p class="fw-medium mt-3">
                        example3.com
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-xxl-4">
                  <a class="block block-transparent block-rounded block-bordered block-link-pop mb-0" href="javascript:void(0)">
                    <div class="block-content text-center">
                      <i class="fa fa-2x fa-globe-americas opacity-50"></i>
                      <p class="fw-medium mt-3">
                        example4.com
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-xxl-4">
                  <a class="block block-transparent block-rounded block-bordered block-link-pop mb-0" href="javascript:void(0)">
                    <div class="block-content text-center">
                      <i class="fa fa-2x fa-plus text-success opacity-50"></i>
                      <p class="fw-medium mt-3">
                        Add New
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn btn-sm btn-alt-secondary" type="button" id="page-header-mega-menu-apps" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-box opacity-50 me-1"></i>
            <span>Apps</span>
            <i class="fa fa-fw fa-angle-down opacity-50"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-xxl dropdown-menu-mega p-0 border-0" aria-labelledby="page-header-mega-menu-apps">
            <div class="px-3 py-3 bg-primary rounded-top d-flex align-items-center justify-content-between">
              <h3 class="h5 fw-semibold text-white mb-0">
                My Applications
              </h3>
              <i class="fa fa-2x fa-box text-white opacity-25 ms-2"></i>
            </div>
            <div class="p-3">
              <div class="row fs-sm">
                <div class="col-xxl-4">
                  <h4 class="h6 p-2 mb-3 bg-body rounded-3">
                    <i class="fa fa-icon"></i>
                    <span>Office</span>
                  </h4>
                  <ul class="list list-simple-mini mb-0">
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-file-word text-primary-lighter me-1"></i> Documents
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-file-excel text-primary-lighter me-1"></i> Spreadsheets
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-file-powerpoint text-primary-lighter me-1"></i> Presentation
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-file-alt text-primary-lighter me-1"></i> Forms
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-file-csv text-primary-lighter me-1"></i> Database
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xxl-4 mt-2 mt-xxl-0">
                  <h4 class="h6 p-2 mb-3 bg-body rounded-3">
                    <i class="fa fa-icon"></i>
                    <span>Development</span>
                  </h4>
                  <ul class="list list-simple-mini mb-0">
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-code text-primary-lighter me-1"></i> VS Code
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-code-branch text-primary-lighter me-1"></i> Repository
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-figma text-primary-lighter me-1"></i> Figma
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-stack-overflow text-primary-lighter me-1"></i> Stack Overflow
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-sourcetree text-primary-lighter me-1"></i> Sourcetree
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xxl-4 mt-2 mt-xxl-0">
                  <h4 class="h6 p-2 mb-3 bg-body rounded-3">
                    <i class="fa fa-icon"></i>
                    <span>Communication</span>
                  </h4>
                  <ul class="list list-simple-mini mb-0">
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-slack text-primary-lighter me-1"></i> Slack
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-discord text-primary-lighter me-1"></i> Discord
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-discourse text-primary-lighter me-1"></i> Discourse
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fab fa-fw fa-diaspora text-primary-lighter me-1"></i> Diaspora
                      </a>
                    </li>
                    <li>
                      <a class="fw-semibold" href="javascript:void(0)">
                        <i class="fa fa-fw fa-comments text-primary-lighter me-1"></i> Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn btn-sm btn-alt-secondary" type="button" id="page-header-mega-menu-settings" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <i class="fa fa-cog opacity-50 me-1"></i>
            <span>Settings</span>
            <i class="fa fa-fw fa-angle-down opacity-50"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-xl dropdown-menu-mega p-0 border-0" aria-labelledby="page-header-mega-menu-settings">
            <div class="px-3 py-3 bg-primary rounded-top d-flex align-items-center justify-content-between">
              <h3 class="h5 fw-semibold text-white mb-0">
                My Settings
              </h3>
              <i class="fa fa-2x fa-cog text-white opacity-25 ms-2"></i>
            </div>
            <div class="p-3">
              <!-- Quick Settings Form -->
              <form action="be_pages_dashboard.php" method="POST" onsubmit="return false;">
                <div class="row fs-sm">
                  <div class="col-xxl-6 space-y-4">
                    <div>
                      <p class="fs-sm fw-semibold mb-2">
                        Online Status
                      </p>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" value="" id="mega-settings-status" name="mega-settings-status">
                        <label class="form-check-label fs-sm" for="mega-settings-status">Make visible</label>
                      </div>
                    </div>
                    <div>
                      <p class="fs-sm fw-semibold mb-2">
                        Updates
                      </p>
                      <div class="space-y-2">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" value="" id="mega-settings-update-app" name="mega-settings-update-app">
                          <label class="form-check-label fs-sm" for="mega-settings-update-app">Applications</label>
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" value="" id="mega-settings-update-sales" name="mega-settings-update-sales" checked>
                          <label class="form-check-label fs-sm" for="mega-settings-update-sales">Sales</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 space-y-4 mt-4 mt-xxl-0">
                    <div>
                      <p class="fs-sm fw-semibold mb-1">
                        Application Alerts
                      </p>
                      <div class="space-y-2">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" value="" id="mega-settings-email" name="mega-settings-email" checked>
                          <label class="form-check-label fs-sm" for="mega-settings-email">Email Notifications</label>
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" value="" id="mega-settings-sms" name="mega-settings-sms">
                          <label class="form-check-label fs-sm" for="mega-settings-sms">SMS Notifications</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="fs-sm fw-semibold mb-1">
                        API
                      </p>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" value="" id="mega-settings-api" name="mega-settings-api" checked>
                        <label class="form-check-label fs-sm" for="mega-settings-api">Enable access</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <!-- END Quick Settings Form -->
            </div>
          </div>
        </div>
      </nav>
      <!-- END Mega Menu -->
    </div>
    <!-- END Left Section -->

    <!-- Right Section -->
    <div class="d-flex align-items-center">
      <!-- User Dropdown -->
      <div class="dropdown d-inline-block ms-2">
        <button type="button" class="btn btn-sm btn-alt-secondary d-flex align-items-center" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="rounded-circle" src="<?php echo $one->assets_folder; ?>/media/avatars/avatar10.jpg" alt="Header Avatar" style="width: 21px;">
          <span class="d-none d-xl-inline-block ms-2">John</span>
          <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0" aria-labelledby="page-header-user-dropdown">
          <div class="p-3 text-center bg-body-light border-bottom rounded-top">
            <?php $one->get_avatar(10, '', 48, true); ?>
            <p class="mt-2 mb-0 fw-medium">John Smith</p>
            <p class="mb-0 text-muted fs-sm fw-medium">Web Developer</p>
          </div>
          <div class="p-2">
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.php">
              <span class="fs-sm fw-medium">Inbox</span>
              <span class="badge rounded-pill bg-primary ms-2">3</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_profile.php">
              <span class="fs-sm fw-medium">Profile</span>
              <span class="badge rounded-pill bg-primary ms-2">1</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              <span class="fs-sm fw-medium">Settings</span>
            </a>
          </div>
          <div role="separator" class="dropdown-divider m-0"></div>
          <div class="p-2">
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="op_auth_lock.php">
              <span class="fs-sm fw-medium">Lock Account</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="op_auth_signin.php">
              <span class="fs-sm fw-medium">Log Out</span>
            </a>
          </div>
        </div>
      </div>
      <!-- END User Dropdown -->

      <!-- Notifications Dropdown -->
      <div class="dropdown d-inline-block ms-2">
        <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-fw fa-bell"></i>
          <span class="text-primary">•</span>
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 border-0 fs-sm" aria-labelledby="page-header-notifications-dropdown">
          <div class="p-2 bg-body-light border-bottom text-center rounded-top">
            <h5 class="dropdown-header text-uppercase">Notifications</h5>
          </div>
          <ul class="nav-items mb-0">
            <li>
              <a class="text-dark d-flex py-2" href="javascript:void(0)">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i class="fa fa-fw fa-check-circle text-success"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">You have a new follower</div>
                  <span class="fw-medium text-muted">15 min ago</span>
                </div>
              </a>
            </li>
            <li>
              <a class="text-dark d-flex py-2" href="javascript:void(0)">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i class="fa fa-fw fa-plus-circle text-primary"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">1 new sale, keep it up</div>
                  <span class="fw-medium text-muted">22 min ago</span>
                </div>
              </a>
            </li>
            <li>
              <a class="text-dark d-flex py-2" href="javascript:void(0)">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i class="fa fa-fw fa-times-circle text-danger"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">Update failed, restart server</div>
                  <span class="fw-medium text-muted">26 min ago</span>
                </div>
              </a>
            </li>
            <li>
              <a class="text-dark d-flex py-2" href="javascript:void(0)">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i class="fa fa-fw fa-plus-circle text-primary"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">2 new sales, keep it up</div>
                  <span class="fw-medium text-muted">33 min ago</span>
                </div>
              </a>
            </li>
            <li>
              <a class="text-dark d-flex py-2" href="javascript:void(0)">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i class="fa fa-fw fa-user-plus text-success"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">You have a new subscriber</div>
                  <span class="fw-medium text-muted">41 min ago</span>
                </div>
              </a>
            </li>
            <li>
              <a class="text-dark d-flex py-2" href="javascript:void(0)">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i class="fa fa-fw fa-check-circle text-success"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">You have a new follower</div>
                  <span class="fw-medium text-muted">42 min ago</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="p-2 border-top text-center">
            <a class="d-inline-block fw-medium" href="javascript:void(0)">
              <i class="fa fa-fw fa-arrow-down me-1 opacity-50"></i> Load More..
            </a>
          </div>
        </div>
      </div>
      <!-- END Notifications Dropdown -->

      <!-- Toggle Side Overlay -->
      <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
      <button type="button" class="btn btn-sm btn-alt-secondary ms-2" data-toggle="layout" data-action="side_overlay_toggle">
        <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
      </button>
      <!-- END Toggle Side Overlay -->
    </div>
    <!-- END Right Section -->
  </div>
  <!-- END Header Content -->

  <!-- Header Search -->
  <div id="page-header-search" class="overlay-header bg-body-extra-light">
    <div class="content-header">
      <form class="w-100" action="be_pages_generic_search.php" method="POST">
        <div class="input-group">
          <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
          <button type="button" class="btn btn-alt-danger" data-toggle="layout" data-action="header_search_off">
            <i class="fa fa-fw fa-times-circle"></i>
          </button>
          <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input">
        </div>
      </form>
    </div>
  </div>
  <!-- END Header Search -->

  <!-- Header Loader -->
  <!-- Please check out the Loaders page under Components category to see examples of showing/hiding it -->
  <div id="page-header-loader" class="overlay-header bg-body-extra-light">
    <div class="content-header">
      <div class="w-100 text-center">
        <i class="fa fa-fw fa-circle-notch fa-spin"></i>
      </div>
    </div>
  </div>
  <!-- END Header Loader -->
</header>
<!-- END Header -->
