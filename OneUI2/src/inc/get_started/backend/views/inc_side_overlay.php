<?php
/**
 * get_started/backend/views/inc_side_overlay.php
 *
 * Author: pixelcave
 *
 * The side overlay of each page
 *
 */
?>
<!-- Side Overlay-->
<aside id="side-overlay" class="fs-sm">
  <!-- Side Header -->
  <div class="content-header border-bottom">
    <!-- User Avatar -->
    <a class="img-link me-1" href="javascript:void(0)">
      <?php $one->get_avatar(10, '', 32); ?>
    </a>
    <!-- END User Avatar -->

    <!-- User Info -->
    <div class="ms-2">
      <a class="text-dark fw-semibold fs-sm" href="javascript:void(0)">Administrator</a>
    </div>
    <!-- END User Info -->

    <!-- Close Side Overlay -->
    <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
    <a class="ms-auto btn btn-sm btn-alt-danger" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_close">
      <i class="fa fa-fw fa-times text-danger"></i>
    </a>
    <!-- END Close Side Overlay -->
  </div>
  <!-- END Side Header -->

  <!-- Side Content -->
  <div class="content-side">
    <!-- Side Overlay Tabs -->
    <div class="block block-transparent pull-x pull-t">
    <ul class="nav nav-tabs nav-tabs-block nav-justified" role="tablist">
        <li class="nav-item">
          <button type="button" class="nav-link active" id="so-section1-tab" data-bs-toggle="tab" data-bs-target="#so-section1" role="tab" aria-controls="so-section1" aria-selected="true">
            <i class="fa fa-fw fa-link text-gray ms-1"></i> Section 1
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" id="so-section1-tab" data-bs-toggle="tab" data-bs-target="#so-section2" role="tab" aria-controls="so-section2" aria-selected="false">
            <i class="fa fa-fw fa-link text-gray ms-1"></i> Section 2
          </button>
        </li>
      </ul>
      <div class="block-content tab-content overflow-hidden">
        <!-- Section 1 -->
        <div class="tab-pane pull-x fade fade-left show active" id="so-section1" role="tabpanel" aria-labelledby="so-section1-tab" tabindex="0">
          <div class="block block-transparent">
            <div class="block-header block-header-default">
              <h3 class="block-title">Section 1</h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                  <i class="si si-refresh"></i>
                </button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
              </div>
            </div>
            <div class="block-content">
              <p>
                ...
              </p>
            </div>
          </div>
        </div>
        <!-- END Section 1 -->

        <!-- Section 2 -->
        <div class="tab-pane pull-x fade fade-right" id="so-section2" role="tabpanel" aria-labelledby="so-section2-tab" tabindex="0">
          <div class="block block-transparent">
            <div class="block-header block-header-default">
              <h3 class="block-title">Section 2</h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                  <i class="si si-refresh"></i>
                </button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
              </div>
            </div>
            <div class="block-content">
              <p>
                ...
              </p>
            </div>
          </div>
        </div>
        <!-- END Section 2 -->
      </div>
    </div>
    <!-- END Side Overlay Tabs -->
  </div>
  <!-- END Side Content -->
</aside>
<!-- END Side Overlay -->
