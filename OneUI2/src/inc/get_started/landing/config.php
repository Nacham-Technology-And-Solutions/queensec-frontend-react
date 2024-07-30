<?php
/**
 * get_started/landing/config.php
 *
 * Author: pixelcave
 *
 * Get Started Landing configuration file
 *
 */

// **************************************************************************************************
// INCLUDED VIEWS
// **************************************************************************************************

$one->inc_header                 = 'inc/get_started/landing/views/inc_header.php';
$one->inc_sidebar                = 'inc/get_started/landing/views/inc_sidebar.php';
$one->inc_footer                 = 'inc/get_started/landing/views/inc_footer.php';


// **************************************************************************************************
// SIDEBAR & SIDE OVERLAY
// **************************************************************************************************

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
// MAIN MENU
// **************************************************************************************************

$one->main_nav                   = array(
    array(
        'name'  => 'Home',
        'icon'  => 'si si-home',
        'url'   => 'gs_landing.php'
    ),
    array(
        'name'  => 'Features',
        'icon'  => 'si si-rocket',
        'url'   => 'javascript:void(0)'
    ),
    array(
        'name'  => 'Pricing',
        'icon'  => 'si si-wallet',
        'url'   => 'javascript:void(0)'
    ),
    array(
        'name'  => 'Contact',
        'icon'  => 'si si-envelope',
        'url'   => 'javascript:void(0)'
    )
);
