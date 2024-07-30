<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Typography
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Good Typography not only looks good but also reinforces the meaning of the content.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Elements</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Typography
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Headings -->
  <h2 class="content-heading">Headings</h2>
  <div class="row">
    <div class="col-lg-6">
      <!-- Bold -->
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">Bold <small>(600 - Default)</small></h3>
        </div>
        <div class="block-content">
          <h1>h1. Title <small>Subtitle</small></h1>
          <h2>h2. Title <small>Subtitle</small></h2>
          <h3>h3. Title <small>Subtitle</small></h3>
          <h4>h4. Title <small>Subtitle</small></h4>
          <h5>h5. Title <small>Subtitle</small></h5>
        </div>
      </div>
      <!-- END Bold -->
    </div>
    <div class="col-lg-6">
      <!-- Extra Bold -->
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">Extra Bold <small>(700)</small></h3>
        </div>
        <div class="block-content">
          <h1 class="fw-bold">h1. Title <small>Subtitle</small></h1>
          <h2 class="fw-bold">h2. Title <small>Subtitle</small></h2>
          <h3 class="fw-bold">h3. Title <small>Subtitle</small></h3>
          <h4 class="fw-bold">h4. Title <small>Subtitle</small></h4>
          <h5 class="fw-bold">h5. Title <small>Subtitle</small></h5>
        </div>
      </div>
      <!-- END Extra Bold -->
    </div>
    <div class="col-lg-6">
      <!-- Normal -->
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">Normal <small>(400)</small></h3>
        </div>
        <div class="block-content">
          <h1 class="fw-normal">h1. Title <small>Subtitle</small></h1>
          <h2 class="fw-normal">h2. Title <small>Subtitle</small></h2>
          <h3 class="fw-normal">h3. Title <small>Subtitle</small></h3>
          <h4 class="fw-normal">h4. Title <small>Subtitle</small></h4>
          <h5 class="fw-normal">h5. Title <small>Subtitle</small></h5>
        </div>
      </div>
      <!-- END Normal -->
    </div>
    <div class="col-lg-6">
      <!-- Light -->
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">Light <small>(300)</small></h3>
        </div>
        <div class="block-content">
          <h1 class="fw-light">h1. Title <small>Subtitle</small></h1>
          <h2 class="fw-light">h2. Title <small>Subtitle</small></h2>
          <h3 class="fw-light">h3. Title <small>Subtitle</small></h3>
          <h4 class="fw-light">h4. Title <small>Subtitle</small></h4>
          <h5 class="fw-light">h5. Title <small>Subtitle</small></h5>
        </div>
      </div>
      <!-- END Light -->
    </div>
    <div class="col-12">
      <!-- Hero Headings -->
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">Headings</h3>
        </div>
        <div class="block-content block-content-full">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="display-1"><span class="d-none d-sm-inline-block">Title</span> Display 1</h2>
              <h2 class="display-2"><span class="d-none d-sm-inline-block">Title</span> Display 2</h2>
              <h2 class="display-3"><span class="d-none d-sm-inline-block">Title</span> Display 3</h2>
            </div>
            <div class="col-lg-6">
              <h2 class="display-4"><span class="d-none d-sm-inline-block">Title</span> Display 4</h2>
              <h2 class="display-5"><span class="d-none d-sm-inline-block">Title</span> Display 5</h2>
              <h2 class="display-6"><span class="d-none d-sm-inline-block">Title</span> Display 6</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- END Hero Headings -->
    </div>
  </div>
  <!-- END Headings -->

  <!-- Typography -->
  <h2 class="content-heading">Typography</h2>

  <!-- Badges Styles -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Badges</h3>
    </div>
    <div class="block-content">
      <div class="row">
        <div class="col-md-6">
          <h3 class="h4">Default</h3>
          <p>
            <span class="badge bg-black-50">Default</span>
            <span class="badge bg-primary">Primary</span>
            <span class="badge bg-success">Success</span>
            <span class="badge bg-info">Info</span>
            <span class="badge bg-warning">Warning</span>
            <span class="badge bg-danger">Danger</span>
          </p>
          <p>
            <span class="badge bg-black-50"><i class="fa fa-home"></i> Home</span>
            <span class="badge bg-primary"><i class="fa fa-cog"></i> Settings</span>
            <span class="badge bg-success"><i class="fa fa-check"></i> Great!</span>
            <span class="badge bg-info"><i class="fa fa-info-circle"></i> More Info</span>
            <span class="badge bg-warning"><i class="fa fa-exclamation-circle"></i> Attention</span>
            <span class="badge bg-danger"><i class="fa fa-times-circle"></i> Error</span>
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="h4">Pills</h3>
          <p>
            <span class="badge rounded-pill bg-black-50">Default</span>
            <span class="badge rounded-pill bg-primary">Primary</span>
            <span class="badge rounded-pill bg-success">Success</span>
            <span class="badge rounded-pill bg-info">Info</span>
            <span class="badge rounded-pill bg-warning">Warning</span>
            <span class="badge rounded-pill bg-danger">Danger</span>
          </p>
          <p>
            <span class="badge rounded-pill bg-black-50"><i class="fa fa-fw fa-home"></i> Home</span>
            <span class="badge rounded-pill bg-primary"><i class="fa fa-fw fa-cog"></i> Settings</span>
            <span class="badge rounded-pill bg-success"><i class="fa fa-fw fa-check"></i> Great!</span>
            <span class="badge rounded-pill bg-info"><i class="fa fa-fw fa-info-circle"></i> More Info</span>
            <span class="badge rounded-pill bg-warning"><i class="fa fa-fw fa-exclamation-circle"></i> Attention</span>
            <span class="badge rounded-pill bg-danger"><i class="fa fa-fw fa-times-circle"></i> Error</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- END Badges Styles -->

  <!-- Text -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Text</h3>
    </div>
    <div class="block-content">
      <div class="row">
        <div class="col-xl-6">
          <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
          <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
        </div>
        <div class="col-xl-6">
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
        </div>
      </div>
    </div>
  </div>
  <!-- END Text -->

  <!-- Links -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Links</h3>
    </div>
    <div class="block-content">
      <div class="row">
        <div class="col-md-4">
          <p>
            <a href="javascript:void(0)">Default link</a>
          </p>
          <p>
            <a class="text-success" href="javascript:void(0)">Success link</a>
          </p>
          <p>
            <a class="text-info" href="javascript:void(0)">Info link</a>
          </p>
          <p>
            <a class="text-warning" href="javascript:void(0)">Warning link</a>
          </p>
          <p>
            <a class="text-danger" href="javascript:void(0)">Danger link</a>
          </p>
        </div>
        <div class="col-md-4">
          <p>
            <a class="link-fx" href="javascript:void(0)">Link with effect</a>
          </p>
          <p>
            <a class="link-fx text-success" href="javascript:void(0)">Success link with effect</a>
          </p>
          <p>
            <a class="link-fx text-info" href="javascript:void(0)">Info link with effect</a>
          </p>
          <p>
            <a class="link-fx text-warning" href="javascript:void(0)">Warning link with effect</a>
          </p>
          <p>
            <a class="link-fx text-danger" href="javascript:void(0)">Danger link with effect</a>
          </p>
        </div>
        <div class="col-md-4">
          <p>
            <a class="link-fx text-amethyst" href="javascript:void(0)">Amethyst</a>
          </p>
          <p>
            <a class="link-fx text-city" href="javascript:void(0)">City</a>
          </p>
          <p>
            <a class="link-fx text-flat" href="javascript:void(0)">Flat</a>
          </p>
          <p>
            <a class="link-fx text-modern" href="javascript:void(0)">Modern</a>
          </p>
          <p>
            <a class="link-fx text-smooth" href="javascript:void(0)">Smooth</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- END Links -->

  <!-- Contextual Colors -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Contextual Colors</h3>
    </div>
    <div class="block-content">
      <div class="row">
        <div class="col-sm-4">
          <p class="text-success">This text has the success color..</p>
          <p class="text-info">This text has the info color..</p>
          <p class="text-warning">This text has the warning color..</p>
          <p class="text-danger">This text has the danger color..</p>
          <p class="text-muted">This text has the muted color..</p>
        </div>
        <div class="col-sm-4">
          <p class="text-primary-darker">This text has the primary darker color..</p>
          <p class="text-primary-dark">This text has the primary dark color..</p>
          <p class="text-primary">This text has the primary color ..</p>
          <p class="text-primary-light">This text has the primary light color..</p>
          <p class="text-primary-lighter">This text has the primary lighter color..</p>
        </div>
        <div class="col-sm-4">
          <p class="text-gray-darker">This text has the gray darker color..</p>
          <p class="text-gray-dark">This text has the gray dark color..</p>
          <p class="text-gray">This text has the gray color ..</p>
          <p class="text-gray-light">This text has the gray light color..</p>
          <p class="text-gray-lighter">This text has the gray lighter color..</p>
        </div>
      </div>
    </div>
  </div>
  <!-- END Contextual Colors -->

  <!-- Lists -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <div class="block-title">Lists</div>
    </div>
    <div class="block-content">
      <div class="row items-push">
        <div class="col-lg-3">
          <h3>Unordered List</h3>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>
              Sublist
              <ul>
                <li>First subitem</li>
                <li>Second subitem</li>
                <li>Third subitem</li>
              </ul>
            </li>
            <li>Third item</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h3>Ordered List</h3>
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>
              Sublist
              <ol>
                <li>First subitem</li>
                <li>Second subitem</li>
                <li>Third subitem</li>
              </ol>
            </li>
            <li>Third item</li>
          </ol>
        </div>
        <div class="col-lg-3">
          <h3>Icon List</h3>
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fa fa-arrow-right"></i>
              </span>
              First item
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-arrow-right"></i>
              </span>
              Second item
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-arrow-right"></i>
              </span>
              Sublist
              <ul class="fa-ul">
                <li>
                  <span class="fa-li">
                    <i class="fa fa-angle-right"></i>
                  </span>
                  First subitem
                </li>
                <li>
                  <span class="fa-li">
                    <i class="fa fa-angle-right"></i>
                  </span>
                  Second subitem
                </li>
                <li>
                  <span class="fa-li">
                    <i class="fa fa-angle-right"></i>
                  </span>
                  Second subitem
                </li>
              </ul>
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-arrow-right"></i>
              </span>
              Third item
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h3>Unstyled List</h3>
          <ul class="list-unstyled">
            <li>First item</li>
            <li>Second item</li>
            <li>
              Sublist
              <ul>
                <li>First subitem</li>
                <li>Second subitem</li>
                <li>Third subitem</li>
              </ul>
            </li>
            <li>Third item</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- END Lists -->

  <!-- Contextual Backgrounds -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Contextual Backgrounds</h3>
    </div>
    <div class="block-content">
      <div class="row text-white fw-semibold">
        <div class="col-md">
          <p class="p-3 bg-success">Success</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-info">Info</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-warning">Warning</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-danger">Danger</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-muted">Muted</p>
        </div>
      </div>
      <div class="row text-white fw-semibold">
        <div class="col-md">
          <p class="p-3 bg-success-light text-success">Success Light</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-info-light text-info">Info Light</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-warning-light text-warning">Warning Light</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-danger-light text-danger">Danger Light</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-gray-light text-gray-darker">Muted Light</p>
        </div>
      </div>
      <div class="row text-white fw-semibold">
        <div class="col-md">
          <p class="p-3 bg-primary-darker">Darker</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-primary-dark">Dark</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-primary">Primary</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-primary-light">Light</p>
        </div>
        <div class="col-md">
          <p class="p-3 bg-primary-lighter">Lighter</p>
        </div>
      </div>
    </div>
  </div>
  <!-- END Contextual Backgrounds -->

  <!-- Extras -->
  <div class="row items-push">
    <div class="col-md-6">
      <!-- Blockquotes -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Blockquotes</h3>
        </div>
        <div class="block-content">
          <figure>
            <blockquote class="blockquote">
              <p>
                Be yourself; everyone else is already taken.
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Oscar Wilde
            </figcaption>
          </figure>
          <figure class="text-end">
            <blockquote class="blockquote">
              <p>
                Don't cry because it's over, smile because it happened.
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Dr. Seuss
            </figcaption>
          </figure>
        </div>
      </div>
      <!-- END Blockquotes -->
    </div>
    <div class="col-md-6">
      <!-- Addresses -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Addresses</h3>
        </div>
        <div class="block-content">
          <address>
            <strong>Twitter, Inc.</strong><br>
            795 Folsom Ave, Suite 600<br>
            San Francisco, CA 94107<br>
            <abbr title="Phone">P:</abbr> (123) 456-7890
          </address>
          <address>
            <strong>Full Name</strong><br>
            <a href="mailto:#">first.last@example.com</a>
          </address>
        </div>
      </div>
      <!-- END Addresses -->
    </div>
  </div>
  <!-- END Extras -->
  <!-- END Typography -->

  <!-- Paragraphs -->
  <h2 class="content-heading">Paragraphs</h2>
  <div class="row items-push">
    <div class="col-md-4">
      <!-- Lead -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Lead</h3>
        </div>
        <div class="block-content">
          <p class="lead">This is a lead paragraph. You can use it you highlight your main point before your article. It is great for such usage.</p>
        </div>
      </div>
      <!-- END Lead -->
    </div>
    <div class="col-md-8">
      <!-- Normal -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Normal</h3>
        </div>
        <div class="block-content">
          <?php $one->get_text('medium', 2); ?>
        </div>
      </div>
      <!-- END Normal -->
    </div>
  </div>
  <!-- END Paragraphs -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
