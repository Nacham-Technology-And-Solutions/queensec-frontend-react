<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light d-print-none">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          Invoice
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Clean and professional design.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Generic</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            Invoice
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content content-boxed">
  <!-- Invoice -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">#INV0625</h3>
      <div class="block-options">
        <!-- Print Page functionality is initialized in Helpers.onePrint() -->
        <button type="button" class="btn-block-option" onclick="One.helpers('one-print');">
          <i class="si si-printer me-1"></i> Print Invoice
        </button>
      </div>
    </div>
    <div class="block-content">
      <div class="p-sm-4 p-xl-7">
        <!-- Invoice Info -->
        <div class="row mb-4">
          <!-- Company Info -->
          <div class="col-6 fs-sm">
            <p class="h3">Company</p>
            <address>
              Street Address<br>
              State, City<br>
              Region, Postal Code<br>
              ltd@example.com
            </address>
          </div>
          <!-- END Company Info -->

          <!-- Client Info -->
          <div class="col-6 text-end fs-sm">
            <p class="h3">Client</p>
            <address>
              Street Address<br>
              State, City<br>
              Region, Postal Code<br>
              ctr@example.com
            </address>
          </div>
          <!-- END Client Info -->
        </div>
        <!-- END Invoice Info -->

        <!-- Table -->
        <div class="table-responsive push">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="text-center" style="width: 60px;"></th>
                <th>Product</th>
                <th class="text-center" style="width: 90px;">Qnt</th>
                <th class="text-end" style="width: 120px;">Unit</th>
                <th class="text-end" style="width: 120px;">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td>
                  <p class="fw-semibold mb-1">App Design & Development</p>
                  <div class="text-muted">Design/Development of iOS and Android application</div>
                </td>
                <td class="text-center">
                  <span class="badge rounded-pill bg-primary">1</span>
                </td>
                <td class="text-end">$25.000,00</td>
                <td class="text-end">$25.000,00</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td>
                  <p class="fw-semibold mb-1">Icon Pack Design</p>
                  <div class="text-muted">50 uniquely crafted icons for promotion</div>
                </td>
                <td class="text-center">
                  <span class="badge rounded-pill bg-primary">1</span>
                </td>
                <td class="text-end">$900,00</td>
                <td class="text-end">$900,00</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td>
                  <p class="fw-semibold mb-1">Website Design</p>
                  <div class="text-muted">Promotional website for the mobile application</div>
                </td>
                <td class="text-center">
                  <span class="badge rounded-pill bg-primary">1</span>
                </td>
                <td class="text-end">$1.600,00</td>
                <td class="text-end">$1.600,00</td>
              </tr>
              <tr>
                <td colspan="4" class="fw-semibold text-end">Subtotal</td>
                <td class="text-end">$27.500,00</td>
              </tr>
              <tr>
                <td colspan="4" class="fw-semibold text-end">Vat Rate</td>
                <td class="text-end">20%</td>
              </tr>
              <tr>
                <td colspan="4" class="fw-semibold text-end">Vat Due</td>
                <td class="text-end">$5.500,00</td>
              </tr>
              <tr>
                <td colspan="4" class="fw-bold text-uppercase text-end bg-body-light">Total Due</td>
                <td class="fw-bold text-end bg-body-light">$33.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END Table -->

        <!-- Footer -->
        <p class="fs-sm text-muted text-center">
          Thank you very much for doing business with us. We look forward to working with you again!
        </p>
        <!-- END Footer -->
      </div>
    </div>
  </div>
  <!-- END Invoice -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>