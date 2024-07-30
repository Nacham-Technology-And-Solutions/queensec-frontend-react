<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/simplemde/simplemde.min.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Form Editors
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Text editing at its finest.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Forms</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Editors
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- CKEditor (js-ckeditor-inline + js-ckeditor ids are initialized in Helpers.jsCkeditor()) -->
  <!-- For more info and examples you can check out http://ckeditor.com -->
  <h2 class="content-heading">CKEditor</h2>
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">In-place Editor</h3>
      <div class="block-options">
        <button type="button" class="btn-block-option">
          <i class="si si-settings"></i>
        </button>
      </div>
    </div>
    <div class="block-content">
      <form action="be_forms_editors.php" method="POST" onsubmit="return false;">
        <div class="mb-4">
          <!-- CKEditor Container -->
          <div id="js-ckeditor-inline">Hello inline CKEditor! Click this text to edit it!</div>
        </div>
      </form>
    </div>
  </div>
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Full Editor</h3>
      <div class="block-options">
        <button type="button" class="btn-block-option">
          <i class="si si-settings"></i>
        </button>
      </div>
    </div>
    <div class="block-content">
      <form action="be_forms_editors.php" method="POST" onsubmit="return false;">
        <div class="mb-4">
          <!-- CKEditor Container -->
          <textarea id="js-ckeditor" name="ckeditor">Hello CKEditor!</textarea>
        </div>
      </form>
    </div>
  </div>
  <!-- END CKEditor -->

  <!-- SimpleMDE Editor (js-simplemde class is initialized in Helpers.jsSimpleMDE()) -->
  <!-- For more info and examples you can check out https://github.com/NextStepWebs/simplemde-markdown-editor -->
  <h2 class="content-heading">SimpleMDE</h2>
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Markdown Editor</h3>
      <div class="block-options">
        <button type="button" class="btn-block-option">
          <i class="si si-settings"></i>
        </button>
      </div>
    </div>
    <div class="block-content">
      <form action="be_forms_editors.php" method="POST" onsubmit="return false;">
        <div class="mb-4">
          <!-- SimpleMDE Container -->
          <textarea class="js-simplemde" id="simplemde" name="simplemde">Hello SimpleMDE!</textarea>
        </div>
      </form>
    </div>
  </div>
  <!-- END SimpleMDE Editor -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/ckeditor/ckeditor.js'); ?>
<?php $one->get_js('js/plugins/simplemde/simplemde.min.js'); ?>

<!-- Page JS Helpers (CKEditor + SimpleMDE plugins) -->
<script>One.helpersOnLoad(['js-ckeditor', 'js-simplemde']);</script>

<?php require 'inc/_global/views/footer_end.php'; ?>
