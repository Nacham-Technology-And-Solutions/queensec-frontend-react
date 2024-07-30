<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php
// Page specific configuration
$one->l_m_content = 'boxed';
?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Page Content -->
<div class="content">
  <!-- Quick Overview -->
  <div class="row">
    <div class="col-6 col-lg-3">
      <a class="block block-rounded block-link-shadow text-center" href="be_pages_ecom_orders.php">
        <div class="block-content block-content-full">
          <div class="fs-2 fw-semibold text-primary">35</div>
        </div>
        <div class="block-content py-2 bg-body-light">
          <p class="fw-medium fs-sm text-muted mb-0">
            Pending
          </p>
        </div>
      </a>
    </div>
    <div class="col-6 col-lg-3">
      <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
        <div class="block-content block-content-full">
          <div class="fs-2 fw-semibold text-dark">120</div>
        </div>
        <div class="block-content py-2 bg-body-light">
          <p class="fw-medium fs-sm text-muted mb-0">
            Today
          </p>
        </div>
      </a>
    </div>
    <div class="col-6 col-lg-3">
      <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
        <div class="block-content block-content-full">
          <div class="fs-2 fw-semibold text-dark">260</div>
        </div>
        <div class="block-content py-2 bg-body-light">
          <p class="fw-medium fs-sm text-muted mb-0">
            Yesterday
          </p>
        </div>
      </a>
    </div>
    <div class="col-6 col-lg-3">
      <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
        <div class="block-content block-content-full">
          <div class="fs-2 fw-semibold text-dark">69,841</div>
        </div>
        <div class="block-content py-2 bg-body-light">
          <p class="fw-medium fs-sm text-muted mb-0">
            This Month
          </p>
        </div>
      </a>
    </div>
  </div>
  <!-- END Quick Overview -->

  <!-- All Orders -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">All Orders</h3>
      <div class="block-options">
        <div class="dropdown">
          <button type="button" class="btn-block-option" id="dropdown-ecom-filters" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filters <i class="fa fa-angle-down ms-1"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-ecom-filters">
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              Pending..
              <span class="badge bg-black-50 rounded-pill">35</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              Processing
              <span class="badge bg-warning rounded-pill">15</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              For Delivery
              <span class="badge bg-info rounded-pill">20</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              Canceled
              <span class="badge bg-danger rounded-pill">72</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              Delivered
              <span class="badge bg-success rounded-pill">890</span>
            </a>
            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
              All
              <span class="badge bg-primary rounded-pill">997</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="block-content">
      <!-- Search Form -->
      <form action="be_pages_ecom_orders.php" method="POST" onsubmit="return false;">
        <div class="mb-4">
          <div class="input-group">
            <input type="text" class="form-control form-control-alt" id="one-ecom-orders-search" name="one-ecom-orders-search" placeholder="Search all orders..">
            <span class="input-group-text bg-body border-0">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
      </form>
      <!-- END Search Form -->

      <!-- All Orders Table -->
      <div class="table-responsive">
        <table class="table table-borderless table-striped table-vcenter">
          <thead>
            <tr>
              <th class="text-center" style="width: 100px;">ID</th>
              <th class="d-none d-sm-table-cell text-center">Submitted</th>
              <th>Status</th>
              <th class="d-none d-xl-table-cell">Customer</th>
              <th class="d-none d-xl-table-cell text-center">Products</th>
              <th class="d-none d-sm-table-cell text-end">Value</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <?php
            $badges['0']['class'] = "bg-success";
            $badges['0']['text'] = "Delivered";
            $badges['1']['class'] = "bg-info";
            $badges['1']['text'] = "For delivery";
            $badges['2']['class'] = "bg-danger";
            $badges['2']['text'] = "Canceled";
            $badges['3']['class'] = "bg-warning";
            $badges['3']['text'] = "Processing";
            ?>
            <?php for ($i = 65; $i > 46; $i--) { ?>
              <tr>
                <td class="text-center fs-sm">
                  <a class="fw-semibold" href="be_pages_ecom_order.php">
                    <strong>ORD.009<?php echo $i; ?></strong>
                  </a>
                </td>
                <td class="d-none d-sm-table-cell text-center fs-sm"><?php echo sprintf('%02d', rand(1, 28)) . '/' . sprintf('%02d', rand(1, 12)); ?>/2020</td>
                <td>
                  <span class="badge<?php $rand = rand(0, 3);
            echo ($badges[$rand]['class']) ? " " . $badges[$rand]['class'] : "";
              ?>"><?php echo $badges[$rand]['text']; ?></span>
                </td>
                <td class="d-none d-xl-table-cell fs-sm">
                  <a class="fw-semibold" href="be_pages_ecom_customer.php"><?php $one->get_name(); ?></a>
                </td>
                <td class="d-none d-xl-table-cell text-center fs-sm">
                  <a class="fw-semibold" href="be_pages_ecom_order.php"><?php echo rand(1, 9); ?></a>
                </td>
                <td class="d-none d-sm-table-cell text-end fs-sm">
                  <strong>$<?php echo rand(25, 2500) . ',' . rand(10, 99); ?></strong>
                </td>
                <td class="text-center">
                  <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_order.php" data-bs-toggle="tooltip" title="View">
                    <i class="fa fa-fw fa-eye"></i>
                  </a>
                  <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)" data-bs-toggle="tooltip" title="Delete">
                    <i class="fa fa-fw fa-times"></i>
                  </a>
                </td>
              </tr>
<?php } ?>
          </tbody>
        </table>
      </div>
      <!-- END All Orders Table -->

      <!-- Pagination -->
      <nav aria-label="Photos Search Navigation">
        <ul class="pagination pagination-sm justify-content-end mt-2">
          <li class="page-item">
            <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-label="Previous">
              Prev
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="javascript:void(0)">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0)">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0)">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0)">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0)" aria-label="Next">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <!-- END Pagination -->
    </div>
  </div>
  <!-- END All Orders -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
