<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/backend/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Page Content -->
<div class="content">
  <!-- Toggle Side Content -->
  <!-- Class Toggle, functionality initialized in Helpers.oneToggleClass() -->
  <div class="d-xl-none push">
    <div class="row g-sm">
      <div class="col-6">
        <button type="button" class="btn btn-alt-secondary w-100" data-toggle="class-toggle" data-target=".js-ecom-div-filters" data-class="d-none">
          <i class="fa fa-fw fa-filter text-muted me-1"></i> Filters
        </button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-alt-secondary w-100" data-toggle="class-toggle" data-target=".js-ecom-div-cart" data-class="d-none">
          <i class="fa fa-fw fa-shopping-cart text-muted me-1"></i> Cart (3)
        </button>
      </div>
    </div>
  </div>
  <!-- END Toggle Side Content -->

  <div class="row push">
    <div class="col-xl-4 order-xl-1">
      <!-- Misc Filters -->
      <div class="block block-rounded js-ecom-div-filters d-none d-xl-block">
        <div class="block-header block-header-default">
          <h3 class="block-title">
            <i class="fa fa-fw fa-tools text-muted me-1"></i> Misc
          </h3>
        </div>
        <div class="block-content">
          <div class="mb-4">
            <select id="ecom-filter-license" name="ecom-filter-license" class="form-select" size="1">
              <option value="0" disabled selected>LICENSE</option>
              <option value="simple">Simple</option>
              <option value="multiple">Multiple</option>
            </select>
          </div>
          <div class="mb-4">
            <select id="ecom-filter-rating" name="ecom-filter-rating" class="form-select" size="1">
              <option value="0" disabled selected>RATING</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Stars</option>
            </select>
          </div>
        </div>
      </div>
      <!-- END Misc Filters -->

      <!-- Price Range Filters -->
      <div class="block block-rounded js-ecom-div-filters d-none d-xl-block">
        <div class="block-header block-header-default">
          <h3 class="block-title">
            <i class="fa fa-fw fa-coins text-muted me-1"></i> Price Range
          </h3>
        </div>
        <div class="block-content block-content-full space-y-2">
          <div class="form-check">
            <input class="form-check-input" type="radio" id="ecom-filter-price1" name="ecom-filter-price" value="option1" checked>
            <label class="form-check-label" for="ecom-filter-price1">less than $39</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="ecom-filter-price2" name="ecom-filter-price" value="option2">
            <label class="form-check-label" for="ecom-filter-price2">$40 - $99</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="ecom-filter-price3" name="ecom-filter-price" value="option2">
            <label class="form-check-label" for="ecom-filter-price3">more than $100</label>
          </div>
        </div>
      </div>
      <!-- END Price Range Filters -->

      <!-- Categories Filters -->
      <div class="block block-rounded js-ecom-div-filters d-none d-xl-block">
        <div class="block-header block-header-default">
          <h3 class="block-title">
            <i class="fa fa-fw fa-boxes text-muted me-1"></i> Categories
          </h3>
        </div>
        <div class="block-content">
          <div class="mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category1" name="ecom-filter-category1" checked>
              <label class="form-check-label" for="ecom-filter-category1">Icons (3)</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category2" name="ecom-filter-category2" checked>
              <label class="form-check-label" for="ecom-filter-category2">Apps (7)</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category3" name="ecom-filter-category3" checked>
              <label class="form-check-label" for="ecom-filter-category3">Games (5)</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category4" name="ecom-filter-category4" checked>
              <label class="form-check-label" for="ecom-filter-category4">Graphics (5)</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category5" name="ecom-filter-category5" checked>
              <label class="form-check-label" for="ecom-filter-category5">Services (8)</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category6" name="ecom-filter-category6" checked>
              <label class="form-check-label" for="ecom-filter-category6">UI Kits (7)</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="ecom-filter-category7" name="ecom-filter-category7" checked>
              <label class="form-check-label" for="ecom-filter-category7">Themes (5)</label>
            </div>
          </div>
        </div>
      </div>
      <!-- END Categories Filters -->

      <!-- Shopping Cart -->
      <div class="block block-rounded js-ecom-div-cart d-none d-xl-block">
        <div class="block-header block-header-default">
          <h3 class="block-title">
            <i class="fa fa-fw fa-shopping-cart text-muted me-1"></i> Shopping Cart (3)
          </h3>
        </div>
        <div class="block-content">
          <table class="table table-borderless table-hover table-vcenter">
            <tbody>
              <tr>
                <td class="text-center">
                  <a class="text-muted" href="javascript:void(0)"><i class="fa fa-times"></i></a>
                </td>
                <td style="width: 60px;">
                  <img class="img-fluid" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product1.png" alt="">
                </td>
                <td>
                  <a class="h5" href="be_pages_ecom_store_product.php">Iconic</a>
                  <div class="fs-sm text-muted">Beautifully crafted icon set</div>
                </td>
                <td class="text-end">
                  <div class="fw-semibold">$9</div>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <a class="text-muted" href="javascript:void(0)"><i class="fa fa-times"></i></a>
                </td>
                <td style="width: 60px;">
                  <img class="img-fluid" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product2.png" alt="">
                </td>
                <td>
                  <a class="h5" href="be_pages_ecom_store_product.php">Mailday</a>
                  <div class="fs-sm text-muted">Pro email templates</div>
                </td>
                <td class="text-end">
                  <div class="fw-semibold">$16</div>
                </td>
              </tr>
              <tr>
                <td class="text-center">
                  <a class="text-muted" href="javascript:void(0)"><i class="fa fa-times"></i></a>
                </td>
                <td style="width: 60px;">
                  <img class="img-fluid" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product3.png" alt="">
                </td>
                <td>
                  <a class="h5" href="be_pages_ecom_store_product.php">Office Suite</a>
                  <div class="fs-sm text-muted">The best productivity apps</div>
                </td>
                <td class="text-end">
                  <div class="fw-semibold">$75</div>
                </td>
              </tr>
              <tr class="table-active">
                <td class="text-end" colspan="3">
                  <span class="h4 fw-medium">Total</span>
                </td>
                <td class="text-end">
                  <span class="h4 fw-semibold">$100</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="block-content block-content-full bg-body-light text-end">
          <a class="btn btn-primary" href="be_pages_ecom_store_checkout.php">
            Checkout
            <i class="fa fa-arrow-right opacity-50 ms-1"></i>
          </a>
        </div>
      </div>
      <!-- END Shopping Cart -->
    </div>
    <div class="col-xl-8 order-xl-0">
      <div class="bg-body-dark fw-semibold rounded p-3 push text-center">
        50 products were found for <mark class="fw-semibold text-danger">inspiring</mark>
      </div>
      <!-- Sort and Show Filters -->
      <div class="d-flex justify-content-between">
        <div class="mb-3">
          <select id="ecom-results-show" name="ecom-results-show" class="form-select form-select-sm" size="1">
            <option value="0" disabled selected>SHOW</option>
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
            <option value="72">72</option>
          </select>
        </div>
        <div class="mb-3">
          <select id="ecom-results-sort" name="ecom-results-sort" class="form-select form-select-sm" size="1">
            <option value="0" disabled selected>SORT BY</option>
            <option value="1">Popularity</option>
            <option value="2">Name (A to Z)</option>
            <option value="3">Name (Z to A)</option>
            <option value="4">Price (Lowest to Highest)</option>
            <option value="5">Price (Highest to Lowest)</option>
            <option value="6">Sales (Lowest to Highest)</option>
            <option value="7">Sales (Highest to Lowest)</option>
          </select>
        </div>
      </div>
      <!-- END Sort and Show Filters -->

      <!-- Product Results -->
      <div class="row items-push">
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product6.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="text-white">(480)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$58</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Super Badges Pack</a>
              </div>
              <p class="fs-sm text-muted">1000s of high quality badges</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product1.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-alt"></i>
                      <span class="text-white">(35)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$9</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Iconic</a>
              </div>
              <p class="fs-sm text-muted">Beautifully crafted icon set</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product2.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="text-white">(48)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$16</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Mailday</a>
              </div>
              <p class="fs-sm text-muted">Pro email templates</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product3.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-alt"></i>
                      <span class="text-white">(19)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$75</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Office Suite</a>
              </div>
              <p class="fs-sm text-muted">The best productivity apps</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product5.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="text-white">(690)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$44</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Video UI Kit</a>
              </div>
              <p class="fs-sm text-muted">Media components that work</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product9.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="text-white">(1050)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$18</div>
                <a class="h6" href="be_pages_ecom_store_product.php">MapNow</a>
              </div>
              <p class="fs-sm text-muted">Map service for your app</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product10.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="text-white">(998)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$44</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Calendious</a>
              </div>
              <p class="fs-sm text-muted">Management for freelancers</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product11.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="text-white">(870)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$35</div>
                <a class="h6" href="be_pages_ecom_store_product.php">Todo App</a>
              </div>
              <p class="fs-sm text-muted">All your tasks in one place</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="block block-rounded h-100 mb-0">
            <div class="block-content p-1">
              <div class="options-container">
                <img class="img-fluid options-item" src="<?php echo $one->assets_folder; ?>/media/various/ecom_product7.png" alt="">
                <div class="options-overlay bg-black-75">
                  <div class="options-overlay-content">
                    <a class="btn btn-sm btn-alt-secondary" href="be_pages_ecom_store_product.php">
                      View
                    </a>
                    <a class="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                      <i class="fa fa-plus text-success me-1"></i> Add to cart
                    </a>
                    <div class="text-warning mt-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-alt"></i>
                      <span class="text-white">(520)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-content">
              <div class="mb-1">
                <div class="fw-semibold float-end ms-1">$65</div>
                <a class="h6" href="be_pages_ecom_store_product.php">RPG Game Pack</a>
              </div>
              <p class="fs-sm text-muted">10-in-1 Anniversary Pack</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end">
        <a class="btn btn-alt-secondary" href="be_pages_ecom_store_products.php">
          Next Page <i class="fa fa-arrow-right ms-1"></i>
        </a>
      </div>
      <!-- END Product Results -->
    </div>
  </div>
</div>
<!-- END Page Content -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
