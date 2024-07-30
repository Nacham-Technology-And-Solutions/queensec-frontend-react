<?php
/**
 * get_started/rtl_landing/config.php
 *
 * Author: pixelcave
 *
 * Get Started RTL Landing configuration file
 *
 */

// **************************************************************************************************
// INCLUDED VIEWS
// **************************************************************************************************

$one->inc_header                 = 'inc/get_started/rtl_landing/views/inc_header.php';
$one->inc_sidebar                = 'inc/get_started/rtl_landing/views/inc_sidebar.php';
$one->inc_footer                 = 'inc/get_started/rtl_landing/views/inc_footer.php';


// **************************************************************************************************
// SIDEBAR & SIDE OVERLAY
// **************************************************************************************************

$one->l_sidebar_left             = false;
$one->l_sidebar_visible_desktop  = false;
$one->l_sidebar_dark             = true;


// **************************************************************************************************
// HEADER
// **************************************************************************************************

$one->l_header_dark              = true;


// **************************************************************************************************
// MAIN CONTENT
// **************************************************************************************************

$one->l_m_content                = 'boxed';


// **************************************************************************************************
// RTL Support
// **************************************************************************************************

$one->l_rtl                      = true;


// **************************************************************************************************
// MAIN MENU
// **************************************************************************************************

$one->main_nav                   = array(
    array(
        'name'  => 'Home',
        'icon'  => 'fa fa-home',
        'url'   => 'gs_rtl_landing.php'
    ),
    array(
        'name'  => 'Features',
        'icon'  => 'fa fa-rocket',
        'url'   => 'javascript:void(0)'
    ),
    array(
        'name'  => 'Pricing',
        'icon'  => 'fab fa-paypal',
        'url'   => 'javascript:void(0)'
    ),
    array(
        'name'  => 'Contact',
        'icon'  => 'fa fa-envelope',
        'url'   => 'javascript:void(0)'
    )
);
