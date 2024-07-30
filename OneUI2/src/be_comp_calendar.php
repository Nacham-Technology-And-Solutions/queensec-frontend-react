<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/fullcalendar/main.min.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Calendar
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          A solid foundation to build your calendar based web application. Powered by Full Calendar.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Calendar
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Calendar -->
  <div class="block block-rounded">
    <div class="block-content">
      <div class="row items-push">
        <div class="col-md-8 col-lg-7 col-xl-9">
          <!-- Calendar Container -->
          <div id="js-calendar"></div>
        </div>
        <div class="col-md-4 col-lg-5 col-xl-3">
          <!-- Add Event Form -->
          <form class="js-form-add-event push">
            <div class="input-group">
              <input type="text" class="js-add-event form-control" placeholder="Add Event..">
              <span class="input-group-text">
                <i class="fa fa-fw fa-plus-circle"></i>
              </span>
            </div>
          </form>
          <!-- END Add Event Form -->

          <!-- Event List -->
          <ul id="js-events" class="list list-events">
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-info-light text-info">Codename X</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-success-light text-success">Weekend Adventure</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-info-light text-info">Project Mars</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-warning-light text-warning">Meeting</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-success-light text-success">Walk the dog</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-info-light text-info">AI schedule</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-success-light text-success">Cinema</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-danger-light text-danger">Project X</div>
            </li>
            <li>
              <div class="js-event p-2 fs-sm fw-medium rounded bg-warning-light text-warning">Skype Meeting</div>
            </li>
          </ul>
          <div class="text-center">
            <p class="fs-sm text-muted">
              <i class="fa fa-arrows-alt"></i> Drag and drop events on the calendar
            </p>
          </div>
          <!-- END Event List -->
        </div>
      </div>
    </div>
  </div>
  <!-- END Calendar -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/fullcalendar/main.min.js'); ?>

<!-- Page JS Code -->
<?php $one->get_js('js/pages/be_comp_calendar.min.js'); ?>

<?php require 'inc/_global/views/footer_end.php'; ?>
