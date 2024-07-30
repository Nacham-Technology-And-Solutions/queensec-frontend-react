<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php
// Page specific configuration
$one->page_loader = true;
?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Loaders
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Show a loader for any page or custom activity.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Loaders
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Header Loader (functionality is initialized Template.__uiApiLayout()) -->
  <!-- Header Loader HTML markup can be found in the header (#page-header) -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Header Loader</h3>
    </div>
    <div class="block-content block-content-full">
      <p class="fs-sm text-muted">
        You can use the layout API to start the header loader and stop it on demand. It is better to be used when the header is also set to fixed, so it is always visible.
      </p>
      <div class="table-responsive">
        <table class="table table-hover mb-0">
          <thead>
            <tr>
              <th style="min-width: 300px; width: 300px;">Live</th>
              <th style="min-width: 380px; width: 380px;">JS</th>
              <th style="min-width: 400px;">Button Attributes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" class="btn btn-sm btn-alt-primary mb-3" data-toggle="layout" data-action="header_loader_on">
                  <i class="fa fa-play me-1 opacity-50"></i>
                  Start Header Loader
                </button>
                <p class="fs-sm mb-0">
                  Starting the header loader is very easy and you can either do it on button click or from JS code
                </p>
              </td>
              <td>
                <code>One.layout('header_loader_on');</code>
              </td>
              <td>
                <code>data-toggle="layout" data-action="header_loader_on"</code>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-sm btn-alt-primary push" data-toggle="layout" data-action="header_loader_off">
                  <i class="fa fa-stop me-1 opacity-50"></i>
                  Stop Header Loader
                </button>
                <p class="fs-sm mb-0">
                  The same applies for stoping it as well, it is very straightforward to use it
                </p>
              </td>
              <td>
                <code>One.layout('header_loader_off');</code>
              </td>
              <td>
                <code>data-toggle="layout" data-action="header_loader_off"</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- END Header Loader -->

  <!-- Page Loader (functionality is initialized Template._uiHandlePageLoader()) -->
  <!-- Page Loader HTML markup can be found at the top of the page after <body> tag (#page-loader) -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Page Loader</h3>
    </div>
    <div class="block-content block-content-full">
      <div class="row">
        <div class="col-md-6">
          <p class="fs-sm text-mute">
            You can add the following markup after <code>#page-container</code> div and the loading screen will be enabled and auto hide once the page loads:
          </p>
          <p>
            <code>&lt;div id=&QUOT;page-loader&QUOT; class=&QUOT;show&QUOT;&gt;&lt;/div&gt;</code>
          </p>
        </div>
        <div class="col-md-6">
          <p class="fs-sm text-muted">
            You can preview the page loader by clicking the following button:
          </p>
          <button type="button" class="btn btn-sm btn-alt-primary mb-3" onclick="One.loader('show');
              setTimeout(function () {
                One.loader('hide');
              }, 3000);">Preview Page Loader</button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-hover mb-0">
          <thead>
            <tr>
              <th style="min-width: 300px; width: 300px;">Mode</th>
              <th style="min-width: 380px; width: 380px;">JS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p class="fs-sm mb-0">
                  Showing the page header
                </p>
              </td>
              <td>
                <code>One.loader('show')</code>
              </td>
            </tr>
            <tr>
              <td>
                <p class="fs-sm mb-0">
                  Hiding the page header
                </p>
              </td>
              <td>
                <code>One.loader('hide')</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- END Page Loader -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
