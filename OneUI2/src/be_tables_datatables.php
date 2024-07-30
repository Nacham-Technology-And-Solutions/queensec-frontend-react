<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>

<!-- Page JS Plugins CSS -->
<?php $one->get_css('js/plugins/datatables-bs5/css/dataTables.bootstrap5.min.css'); ?>
<?php $one->get_css('js/plugins/datatables-buttons-bs5/css/buttons.bootstrap5.min.css'); ?>
<?php $one->get_css('js/plugins/datatables-responsive-bs5/css/responsive.bootstrap5.min.css'); ?>

<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-body-light">
  <div class="content content-full">
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
      <div class="flex-grow-1">
        <h1 class="h3 fw-bold mb-2">
          DataTables
        </h1>
        <h2 class="fs-base lh-base fw-medium text-muted mb-0">
          Tables transformed with dynamic features.
        </h2>
      </div>
      <nav class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Tables</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            DataTables
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<!-- END Hero -->

<!-- Page Content -->
<div class="content">
  <!-- Dynamic Table Full -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Dynamic Table <small>Full</small></h3>
    </div>
    <div class="block-content block-content-full">
      <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
      <table class="table table-bordered table-striped table-vcenter js-dataTable-full">
        <thead>
          <tr>
            <th class="text-center" style="width: 80px;">ID</th>
            <th>Name</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
            <th class="d-none d-sm-table-cell" style="width: 15%;">Access</th>
            <th style="width: 15%;">Registered</th>
          </tr>
        </thead>
        <tbody>
          <?php for ($i = 1; $i < 41; $i++) { ?>
            <tr>
              <td class="text-center fs-sm"><?php echo $i; ?></td>
              <td class="fw-semibold fs-sm"><?php $one->get_name(); ?></td>
              <td class="d-none d-sm-table-cell fs-sm">
                client<?php echo $i; ?><span class="text-muted">@example.com</span>
              </td>
              <td class="d-none d-sm-table-cell">
                <?php $one->get_tag(); ?>
              </td>
              <td>
                <span class="text-muted fs-sm"><?php echo rand(2, 10); ?> days ago</span>
              </td>
            </tr>
          <?php } ?>
        </tbody>
      </table>
    </div>
  </div>
  <!-- END Dynamic Table Full -->

  <!-- Dynamic Table Full Pagination -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Dynamic Table <small>Full pagination</small></h3>
    </div>
    <div class="block-content block-content-full">
      <!-- DataTables init on table by adding .js-dataTable-full-pagination class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
      <table class="table table-bordered table-striped table-vcenter js-dataTable-full-pagination">
        <thead>
          <tr>
            <th class="text-center" style="width: 80px;">ID</th>
            <th>Name</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
            <th class="d-none d-sm-table-cell" style="width: 15%;">Access</th>
            <th style="width: 15%;">Registered</th>
          </tr>
        </thead>
        <tbody>
          <?php for ($i = 1; $i < 41; $i++) { ?>
            <tr>
              <td class="text-center fs-sm"><?php echo $i; ?></td>
              <td class="fw-semibold fs-sm"><?php $one->get_name(); ?></td>
              <td class="d-none d-sm-table-cell fs-sm">
                client<?php echo $i; ?><span class="text-muted">@example.com</span>
              </td>
              <td class="d-none d-sm-table-cell">
                <?php $one->get_tag(); ?>
              </td>
              <td>
                <span class="text-muted fs-sm"><?php echo rand(2, 10); ?> days ago</span>
              </td>
            </tr>
          <?php } ?>
        </tbody>
      </table>
    </div>
  </div>
  <!-- END Dynamic Table Full Pagination -->

  <!-- Dynamic Table Simple -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Dynamic Table <small>With only sorting and pagination</small></h3>
    </div>
    <div class="block-content block-content-full">
      <!-- DataTables init on table by adding .js-dataTable-simple class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
      <table class="table table-bordered table-striped table-vcenter js-dataTable-simple">
        <thead>
          <tr>
            <th class="text-center" style="width: 80px;">ID</th>
            <th>Name</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
            <th class="d-none d-sm-table-cell" style="width: 15%;">Access</th>
            <th style="width: 15%;">Registered</th>
          </tr>
        </thead>
        <tbody>
          <?php for ($i = 1; $i < 41; $i++) { ?>
            <tr>
              <td class="text-center fs-sm"><?php echo $i; ?></td>
              <td class="fw-semibold fs-sm"><?php $one->get_name(); ?></td>
              <td class="d-none d-sm-table-cell fs-sm">
                client<?php echo $i; ?><span class="text-muted">@example.com</span>
              </td>
              <td class="d-none d-sm-table-cell">
                <?php $one->get_tag(); ?>
              </td>
              <td>
                <span class="text-muted fs-sm"><?php echo rand(2, 10); ?> days ago</span>
              </td>
            </tr>
          <?php } ?>
        </tbody>
      </table>
    </div>
  </div>
  <!-- END Dynamic Table Simple -->

  <!-- Dynamic Table with Export Buttons -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">Dynamic Table <small>Export Buttons</small></h3>
    </div>
    <div class="block-content block-content-full">
      <!-- DataTables init on table by adding .js-dataTable-buttons class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
      <table class="table table-bordered table-striped table-vcenter js-dataTable-buttons">
        <thead>
          <tr>
            <th class="text-center" style="width: 80px;">ID</th>
            <th>Name</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
            <th class="d-none d-sm-table-cell" style="width: 15%;">Access</th>
            <th style="width: 15%;">Registered</th>
          </tr>
        </thead>
        <tbody>
          <?php for ($i = 1; $i < 41; $i++) { ?>
            <tr>
              <td class="text-center fs-sm"><?php echo $i; ?></td>
              <td class="fw-semibold fs-sm"><?php $one->get_name(); ?></td>
              <td class="d-none d-sm-table-cell fs-sm">
                client<?php echo $i; ?><span class="text-muted">@example.com</span>
              </td>
              <td class="d-none d-sm-table-cell">
                <?php $one->get_tag(); ?>
              </td>
              <td>
                <span class="text-muted fs-sm"><?php echo rand(2, 10); ?> days ago</span>
              </td>
            </tr>
          <?php } ?>
        </tbody>
      </table>
    </div>
  </div>
  <!-- END Dynamic Table with Export Buttons -->

  <!-- Dynamic Table Responsive -->
  <div class="block block-rounded">
    <div class="block-header block-header-default">
      <h3 class="block-title">
        Dynamic Table <small>DataTables Responsive Mode</small>
      </h3>
    </div>
    <div class="block-content block-content-full">
      <!-- DataTables init on table by adding .js-dataTable-responsive class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
      <table class="table table-bordered table-striped table-vcenter js-dataTable-responsive">
        <thead>
          <tr>
            <th class="text-center"></th>
            <th>Name</th>
            <th>Email</th>
            <th style="width: 15%;">Access</th>
            <th style="width: 15%;">Registered</th>
          </tr>
        </thead>
        <tbody>
          <?php for ($i = 1; $i < 41; $i++) { ?>
            <tr>
              <td class="text-center fs-sm"><?php echo $i; ?></td>
              <td class="fw-semibold fs-sm"><?php $one->get_name(); ?></td>
              <td class="fs-sm">customer<?php echo $i; ?>@example.com</td>
              <td>
                <?php $one->get_tag(); ?>
              </td>
              <td>
                <span class="text-muted fs-sm"><?php echo rand(2, 10); ?> days ago</span>
              </td>
            </tr>
          <?php } ?>
        </tbody>
      </table>
    </div>
  </div>
  <!-- Dynamic Table Responsive -->
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>

<!-- jQuery (required for DataTables plugin) -->
<?php $one->get_js('js/lib/jquery.min.js'); ?>

<!-- Page JS Plugins -->
<?php $one->get_js('js/plugins/datatables/jquery.dataTables.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-bs5/js/dataTables.bootstrap5.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-responsive/js/dataTables.responsive.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-responsive-bs5/js/responsive.bootstrap5.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons/dataTables.buttons.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons-bs5/js/buttons.bootstrap5.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons-jszip/jszip.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons-pdfmake/pdfmake.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons-pdfmake/vfs_fonts.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons/buttons.print.min.js'); ?>
<?php $one->get_js('js/plugins/datatables-buttons/buttons.html5.min.js'); ?>

<!-- Page JS Code -->
<?php $one->get_js('js/pages/be_tables_datatables.min.js'); ?>

<?php require 'inc/_global/views/footer_end.php'; ?>
