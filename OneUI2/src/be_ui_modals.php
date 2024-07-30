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
          Modals
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Add dialogs to your site for lightboxes, user notifications, or completely custom content.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Elements</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Modals
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Modal functionality is auto initialized by Bootstrap in js/core/bootstrap.bundle.min.js -->
  <!-- For advanced modal usage you can check out https://getbootstrap.com/docs/5.2/components/modal/ -->

  <!-- Bootstrap Modals -->
  <h2 class="content-heading">Bootstrap Modals</h2>
  <div class="row items-push">
    <div class="col-md-6">
      <!-- Default Variation -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Default Variation</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Modals are completely customizable and here we present the default one
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-normal">Launch Modal</button>
        </div>
      </div>
      <!-- END Default Variation -->
    </div>
    <div class="col-md-6">
      <!-- Size: Small -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Size: Small</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            If you don’t have much content, you can use the small size variation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-small">Launch Modal</button>
        </div>
      </div>
      <!-- END Size: Small -->
    </div>
    <div class="col-md-6">
      <!-- Size: Large -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Size: Large</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            If you need more space you can use the large size variation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-large">Launch Modal</button>
        </div>
      </div>
      <!-- END Size: Large -->
    </div>
    <div class="col-md-6">
      <!-- Size: Extra Large -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Size: Extra Large</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Do you need even more space? Go for the extra large modal
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-extra-large">Launch Modal</button>
        </div>
      </div>
      <!-- END Size: Extra Large -->
    </div>
    <div class="col-md-6">
      <!-- Position: Top -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Position: Top</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            You can position your modals at the top of the screen
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-top">Launch Modal</button>
        </div>
      </div>
      <!-- END Position: Top -->
    </div>
    <div class="col-md-6">
      <!-- Position: Vertically Centered -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Position: Vertically Centered</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            You can center your modals in the middle of the screen
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-vcenter">Launch Modal</button>
        </div>
      </div>
      <!-- END Position: Vertically Centered -->
    </div>
    <div class="col-md-6">
      <!-- Tabs in Modal -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Tabs in Modal</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            You can even add tabs in your modal
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-tabs">Launch Modal</button>
        </div>
      </div>
      <!-- END Tabs in Modal -->
    </div>
    <div class="col-md-6">
      <!--  Alternative Tabs in Modal -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title"> Alternative Tabs in Modal</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Alternative tabs in a modal
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-tabs-alt">Launch Modal</button>
        </div>
      </div>
      <!-- END AlternativeTabs in Modal -->
    </div>
  </div>
  <!-- END Bootstrap Modals -->

  <!-- Bootstrap Modals Animations -->
  <h2 class="content-heading">
    Bootstrap Modals <small>Animations</small>
  </h2>
  <div class="row items-push">
    <div class="col-md-6">
      <!-- Fade In -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Fade In</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            The default modal animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-fadein">Launch Modal</button>
        </div>
      </div>
      <!-- END Fade In -->
    </div>
    <div class="col-md-6">
      <!-- Pop In -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Pop In</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Poping in animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-popin">Launch Modal</button>
        </div>
      </div>
      <!-- END Pop In -->
    </div>
    <div class="col-md-6">
      <!-- Pop Out -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Pop Out</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Poping out animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-popout">Launch Modal</button>
        </div>
      </div>
      <!-- END Pop Out -->
    </div>
    <div class="col-md-6">
      <!-- Slide Up -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Slide Up</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Sliding from up animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-slideup">Launch Modal</button>
        </div>
      </div>
      <!-- END Slide Up -->
    </div>
    <div class="col-md-6">
      <!-- Slide Right -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Slide Right</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Sliding from right animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-slideright">Launch Modal</button>
        </div>
      </div>
      <!-- END Slide Right -->
    </div>
    <div class="col-md-6">
      <!-- Slide Left -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">Slide Left</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Sliding from left animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-slideleft">Launch Modal</button>
        </div>
      </div>
      <!-- END Slide Left -->
    </div>
    <div class="col-md-6">
      <!-- From Right -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">From Right</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Coming from right with rotation animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-fromright">Launch Modal</button>
        </div>
      </div>
      <!-- END From Right -->
    </div>
    <div class="col-md-6">
      <!-- From Left -->
      <div class="block block-rounded h-100 mb-0">
        <div class="block-header block-header-default">
          <h3 class="block-title">From Left</h3>
        </div>
        <div class="block-content">
          <p class="fs-sm text-muted">
            Coming from left with rotation animation
          </p>
          <button type="button" class="btn btn-alt-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-fromleft">Launch Modal</button>
        </div>
      </div>
      <!-- END From Left -->
    </div>
  </div>
  <!-- END Bootstrap Modals Animations -->

  <!-- Normal Block Modal -->
  <div class="modal" id="modal-block-normal" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Normal Block Modal -->

  <!-- Small Block Modal -->
  <div class="modal" id="modal-block-small" tabindex="-1" role="dialog" aria-labelledby="modal-block-small" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small'); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Small Block Modal -->

  <!-- Large Block Modal -->
  <div class="modal" id="modal-block-large" tabindex="-1" role="dialog" aria-labelledby="modal-block-large" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Large Block Modal -->

  <!-- Extra Large Block Modal -->
  <div class="modal" id="modal-block-extra-large" tabindex="-1" role="dialog" aria-labelledby="modal-block-extra-large" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('medium', 3); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Extra Large Block Modal -->

  <!-- Top Block Modal -->
  <div class="modal" id="modal-block-top" tabindex="-1" role="dialog" aria-labelledby="modal-block-top" aria-hidden="true">
    <div class="modal-dialog modal-dialog-top" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Top Block Modal -->

  <!-- Vertically Centered Block Modal -->
  <div class="modal" id="modal-block-vcenter" tabindex="-1" role="dialog" aria-labelledby="modal-block-vcenter" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Vertically Centered Block Modal -->

  <!-- Fade In Block Modal -->
  <div class="modal fade" id="modal-block-fadein" tabindex="-1" role="dialog" aria-labelledby="modal-block-fadein" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Fade In Block Modal -->

  <!-- Pop In Block Modal -->
  <div class="modal fade" id="modal-block-popin" tabindex="-1" role="dialog" aria-labelledby="modal-block-popin" aria-hidden="true">
    <div class="modal-dialog modal-dialog-popin" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Pop In Block Modal -->

  <!-- Pop Out Block Modal -->
  <div class="modal fade" id="modal-block-popout" tabindex="-1" role="dialog" aria-labelledby="modal-block-popout" aria-hidden="true">
    <div class="modal-dialog modal-dialog-popout" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Pop Out Block Modal -->

  <!-- Slide Up Block Modal -->
  <div class="modal fade" id="modal-block-slideup" tabindex="-1" role="dialog" aria-labelledby="modal-block-slideup" aria-hidden="true">
    <div class="modal-dialog modal-dialog-slideup" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Slide Up Block Modal -->

  <!-- Slide Right Block Modal -->
  <div class="modal fade" id="modal-block-slideright" tabindex="-1" role="dialog" aria-labelledby="modal-block-slideright" aria-hidden="true">
    <div class="modal-dialog modal-dialog-slideright" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Slide Right Block Modal -->

  <!-- Slide Left Block Modal -->
  <div class="modal fade" id="modal-block-slideleft" tabindex="-1" role="dialog" aria-labelledby="modal-block-slideleft" aria-hidden="true">
    <div class="modal-dialog modal-dialog-slideleft" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Slide Left Block Modal -->

  <!-- From Right Block Modal -->
  <div class="modal fade" id="modal-block-fromright" tabindex="-1" role="dialog" aria-labelledby="modal-block-fromright" aria-hidden="true">
    <div class="modal-dialog modal-dialog-fromright" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END From Right Block Modal -->

  <!-- From Left Block Modal -->
  <div class="modal fade" id="modal-block-fromleft" tabindex="-1" role="dialog" aria-labelledby="modal-block-fromleft" aria-hidden="true">
    <div class="modal-dialog modal-dialog-fromleft" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <div class="block-header block-header-default">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content fs-sm">
            <?php $one->get_text('small', 2); ?>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END From Left Block Modal -->

  <!-- Tabs in Modal -->
  <div class="modal fade" id="modal-block-tabs" tabindex="-1" role="dialog" aria-labelledby="modal-block-tabs" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
          <ul class="nav nav-tabs nav-tabs-block" role="tablist">
            <li class="nav-item">
              <button type="button" class="nav-link active" id="btabs-static-home-tab" data-bs-toggle="tab" data-bs-target="#btabs-static-home" role="tab" aria-controls="btabs-static-home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item">
              <button type="button" class="nav-link" id="btabs-static-profile-tab" data-bs-toggle="tab" data-bs-target="#btabs-static-profile" role="tab" aria-controls="btabs-static-profile" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item ms-auto">
              <button type="button" class="nav-link" id="btabs-static-settings-tab" data-bs-toggle="tab" data-bs-target="#btabs-static-settings" role="tab" aria-controls="btabs-static-settings" aria-selected="false">
                <i class="si si-settings"></i>
                <span class="visually-hidden">Settings</span>
              </button>
            </li>
          </ul>
          <div class="block-content tab-content">
            <div class="tab-pane active" id="btabs-static-home" role="tabpanel" aria-labelledby="btabs-static-home-tab" tabindex="0">
              <h4 class="fw-normal">Home Content</h4>
              <p>...</p>
            </div>
            <div class="tab-pane" id="btabs-static-profile" role="tabpanel" aria-labelledby="btabs-static-profile-tab" tabindex="0">
              <h4 class="fw-normal">Profile Content</h4>
              <p>...</p>
            </div>
            <div class="tab-pane" id="btabs-static-settings" role="tabpanel" aria-labelledby="btabs-static-settings-tab" tabindex="0">
              <h4 class="fw-normal">Settings Content</h4>
              <p>...</p>
            </div>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Tabs in Modal -->

  <!-- Tabs in Modal -->
  <div class="modal fade" id="modal-block-tabs-alt" tabindex="-1" role="dialog" aria-labelledby="modal-block-tabs-alt" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="block block-rounded block-transparent mb-0">
        <ul class="nav nav-tabs nav-tabs-alt" role="tablist">
            <li class="nav-item">
              <button type="button" class="nav-link active" id="btabs-alt-static-home-tab" data-bs-toggle="tab" data-bs-target="#btabs-alt-static-home" role="tab" aria-controls="btabs-alt-static-home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item">
              <button type="button" class="nav-link" id="btabs-alt-static-profile-tab" data-bs-toggle="tab" data-bs-target="#btabs-alt-static-profile" role="tab" aria-controls="btabs-alt-static-profile" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item ms-auto">
              <button type="button" class="nav-link" id="btabs-alt-static-settings-tab" data-bs-toggle="tab" data-bs-target="#btabs-alt-static-settings" role="tab" aria-controls="btabs-alt-static-settings" aria-selected="false">
                <i class="si si-settings"></i>
                <span class="visually-hidden">Settings</span>
              </button>
            </li>
          </ul>
          <div class="block-content tab-content">
            <div class="tab-pane active" id="btabs-alt-static-home" role="tabpanel" aria-labelledby="btabs-alt-static-home-tab" tabindex="0">
              <h4 class="fw-normal">Home Content</h4>
              <p>...</p>
            </div>
            <div class="tab-pane" id="btabs-alt-static-profile" role="tabpanel" aria-labelledby="btabs-alt-static-profile-tab" tabindex="0">
              <h4 class="fw-normal">Profile Content</h4>
              <p>...</p>
            </div>
            <div class="tab-pane" id="btabs-alt-static-settings" role="tabpanel" aria-labelledby="btabs-alt-static-settings-tab" tabindex="0">
              <h4 class="fw-normal">Settings Content</h4>
              <p>...</p>
            </div>
          </div>
          <div class="block-content block-content-full text-end bg-body">
            <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Tabs in Modal -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
