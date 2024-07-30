<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/highlightjs/styles/atom-one-dark.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Highlight.js
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Beautiful syntax highlighting to showcase your code.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Components</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Syntax Highlighting
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<!-- Syntax Highlighting functionality is initialized in Helpers.jsHighlightjs() -->
<!-- For more info and examples you can check out https://highlightjs.org/usage/ -->
<div class="content">
  <!-- HTML -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">HTML</h3>
    </div>
    <div class="block-content">
      <pre><code class="html">&lt;!doctype html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;utf-8&quot;&gt;

        &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- Your content --&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
  </div>
  <!-- END HTML -->

  <!-- CSS -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">CSS</h3>
    </div>
    <div class="block-content">
      <pre><code class="css">/*
=================================================================
SECTION
=================================================================
*/

/* Sub section 1 */
selector {

}

/* Sub section 2 */
selector {

}

/*
=================================================================
SECTION
=================================================================
*/

/* Sub section 1 */
selector {

}

/* Sub section 2 */
selector {

}</code></pre>
    </div>
  </div>
  <!-- END CSS -->

  <!-- SCSS -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">SCSS</h3>
    </div>
    <div class="block-content">
      <pre><code class="scss">$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}</code></pre>
    </div>
  </div>
  <!-- END SCSS -->

  <!-- Less -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Less</h3>
    </div>
    <div class="block-content">
      <pre><code class="less">@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
    -webkit-box-shadow: @style @c;
    box-shadow:         @style @c;
}

.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
    .box-shadow(@style, rgba(0, 0, 0, @alpha));
}

.box {
    color: saturate(@base, 5%);
    border-color: lighten(@base, 30%);
    div { .box-shadow(0 0 5px, 30%) }
}</code></pre>
    </div>
  </div>
  <!-- END Less -->

  <!-- JavaScript -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">JavaScript</h3>
    </div>
    <div class="block-content">
      <pre><code class="javascript">/*
 *  Document   : app.js
 *  Author     : pixelcave
 */

var App = function() {

    // User Interface init
    var uiInit = function() {

    };

    return {
        init: function() {
            uiInit();
        }
    };
}();

// Initialize app when page loads
jQuery(function(){ App.init(); });</code></pre>
    </div>
  </div>
  <!-- END JavaScript -->

  <!-- PHP -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">PHP</h3>
    </div>
    <div class="block-content">
      <pre><code class="php">&lt;?php
class App {
    function home()
    {
        // ...
    }

    function profile()
    {
        // ...
    }

    function settings()
    {
        // ...
    }
}</code></pre>
    </div>
  </div>
  <!-- END PHP -->

  <!-- Ruby -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Ruby</h3>
    </div>
    <div class="block-content">
      <pre><code class="ruby"># Output "I love Ruby"
say = "I love Ruby"
puts say

# Output "I *LOVE* RUBY"
say['love'] = "*love*"
puts say.upcase

# Output "I *love* Ruby"
# five times
5.times { puts say }</code></pre>
    </div>
  </div>
  <!-- END Ruby -->

  <!-- Python -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Python</h3>
    </div>
    <div class="block-content">
      <pre><code class="python">name = raw_input('What is your name?\n')

print 'Hi, %s.' % name</code></pre>
    </div>
  </div>
  <!-- END Python -->

  <!-- JSON -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">JSON</h3>
    </div>
    <div class="block-content">
      <pre><code class="json">{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                {"value": "New", "onclick": "CreateNewDoc()"},
                {"value": "Open", "onclick": "OpenDoc()"},
                {"value": "Close", "onclick": "CloseDoc()"}
            ]
        }
    }
}</code></pre>
    </div>
  </div>
  <!-- END JSON -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/highlightjs/highlight.pack.min.js'); ?>

<!-- Page JS Helpers (Highlight.js Plugin) -->
<script>One.helpersOnLoad(['js-highlightjs']);</script>

<?php require 'inc/_global/views/footer_end.php'; ?>
