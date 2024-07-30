<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/highlightjs/styles/atom-one-dark.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero Content -->
<div class="bg-image" style="background-image: url('<?php echo $one->assets_folder; ?>/media/various/promo-code.png');">
  <div class="bg-primary-dark-op">
    <div class="content content-full text-center py-7 pb-5">
      <h1 class="h2 text-white mb-2">
        Learn HTML5 in 10 simple and easy to follow steps
      </h1>
      <h2 class="h4 fw-normal text-white-75">
        10 Lessons &bull; 3 hours
      </h2>
    </div>
  </div>
</div>
<!-- END Hero Content -->

<!-- Navigation -->
<div class="bg-body-extra-light">
  <div class="content content-boxed py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-alt">
        <li class="breadcrumb-item">
          <a class="link-fx" href="be_pages_elearning_courses.php">Courses</a>
        </li>
        <li class="breadcrumb-item">
          <a class="link-fx" href="be_pages_elearning_course.php">Learn HTML5</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          1.1 HTML5 Intro
        </li>
      </ol>
    </nav>
  </div>
</div>
<!-- END Navigation -->

<!-- Page Content -->
<div class="content content-boxed">
  <p class="alert alert-primary text-center">
    <i class="fa fa-gift me-1"></i> This is a free preview! If you like it, you can subscribe or purchase this course for only $28!
  </p>
  <div class="row">
    <div class="col-xl-8">
      <!-- Lesson -->
      <!-- Syntax Highlighting functionality is initialized in Helpers.jsHighlightjs() -->
      <!-- For more info and examples you can check out https://highlightjs.org/usage/ -->
      <div class="block block-rounded">
        <div class="block-content">
          <h3>1.1 HTML5 Intro (free preview)</h3>
          <?php echo $one->get_text('medium', 1); ?>
          <pre class="push"><code class="html">&lt;!doctype html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;utf-8&quot;&gt;

        &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- Your content --&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <?php echo $one->get_text('medium', 1); ?>
          <div class="alert alert-warning text-center">
            <i class="fa fa-exclamation-triangle me-1"></i> This is an attention message.
          </div>
          <?php echo $one->get_text('medium', 1); ?>
          <pre class="push"><code class="html">&lt;div id=&quot;id-name&quot; class=&quot;class-name&quot;&gt;
    &lt;!-- This is a comment --&gt;
&lt;/div&gt;</code></pre>
          <p class="fw-semibold">Things to do:</p>
          <ul class="fa-ul list list-simple-mini push">
            <li>
              <i class="fa fa-check fa-li text-success"></i>
              Make sure you are always closing your tags.
            </li>
            <li>
              <i class="fa fa-check fa-li text-success"></i>
              Keep writing markup to become more familiar.
            </li>
            <li>
              <i class="fa fa-check fa-li text-success"></i>
              Create your own projects.
            </li>
          </ul>
          <p class="alert alert-success text-center">
            <i class="fa fa-thumbs-up me-1"></i> Congrats! Let's head up to the next lesson.
          </p>
        </div>
      </div>
      <!-- END Lesson -->
    </div>
    <div class="col-xl-4">
      <!-- Subscribe -->
      <div class="block block-rounded">
        <div class="block-content">
          <a class="btn btn-primary w-100 mb-2" href="javascript:void(0)">Subscribe from $9/month</a>
          <p class="fs-sm text-center">
            or <a class="link-effect fw-medium" href="javascript:void(0)">buy this course for $28</a>
          </p>
          <a class="btn btn-primary w-100 disabled push" href="javascript:void(0)">
            <i class="fa fa-download me-1"></i> Download
          </a>
        </div>
      </div>
      <!-- END Subscribe -->

      <!-- Course Info -->
      <div class="block block-rounded">
        <div class="block-header block-header-default text-center">
          <h3 class="block-title">About This Course</h3>
        </div>
        <div class="block-content">
          <table class="table table-striped table-borderless fs-sm">
            <tbody>
              <tr>
                <td>
                  <i class="fa fa-fw fa-book me-1"></i> 10 Lessons
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa fa-fw fa-clock me-1"></i> 3 hours
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa fa-fw fa-heart me-1"></i> 16850 Favorites
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa fa-fw fa-calendar me-1"></i> 3 weeks ago
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa fa-fw fa-tags me-1"></i>
                  <a class="fw-semibold link-fx text-primary" href="javascript:void(0)">HTML</a>,
                  <a class="fw-semibold link-fx text-primary" href="javascript:void(0)">CSS</a>,
                  <a class="fw-semibold link-fx text-primary" href="javascript:void(0)">JavaScript</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- END Course Info -->

      <!-- About Instructor -->
      <a class="block block-rounded block-link-shadow" href="javascript:void(0)">
        <div class="block-header block-header-default text-center">
          <h3 class="block-title">About The Instructor</h3>
        </div>
        <div class="block-content block-content-full text-center">
          <div class="push">
            <?php $one->get_avatar('', 'male'); ?>
          </div>
          <div class="fw-semibold mb-1"><?php $one->get_name('male'); ?></div>
          <div class="fs-sm text-muted">Front-end Developer</div>
        </div>
      </a>
      <!-- END About Instructor -->
    </div>
  </div>
</div>
<!-- END Page Content -->

<!-- Get Started -->
<div class="bg-body-dark">
  <div class="content content-full text-center py-6">
    <h3 class="h4 mb-4">
      Subscribe today and learn HTML5 in under 3 hours.
    </h3>
    <a class="btn btn-primary px-4 py-2" href="javascript:void(0)">Subscribe from $9/month</a>
  </div>
</div>
<!-- END Get Started -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/highlightjs/highlight.pack.min.js'); ?>

<!-- Page JS Helpers (Highlight.js Plugin) -->
<script>One.helpersOnLoad(['js-highlightjs']);</script>

<?php require 'inc/_global/views/footer_end.php'; ?>
