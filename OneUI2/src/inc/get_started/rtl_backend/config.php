<?php
/**
 * get_started/rtl_backend/config.php
 *
 * Author: pixelcave
 *
 * Get Started RTL Backend configuration file
 *
 */

// **************************************************************************************************
// INCLUDED VIEWS
// **************************************************************************************************

$one->inc_side_overlay           = 'inc/get_started/rtl_backend/views/inc_side_overlay.php';
$one->inc_sidebar                = 'inc/get_started/rtl_backend/views/inc_sidebar.php';
$one->inc_header                 = 'inc/get_started/rtl_backend/views/inc_header.php';
$one->inc_footer                 = 'inc/get_started/rtl_backend/views/inc_footer.php';


// **************************************************************************************************
// MAIN CONTENT
// **************************************************************************************************

$one->l_m_content                = 'narrow';


// **************************************************************************************************
// SIDEBAR & SIDE OVERLAY
// **************************************************************************************************

$one->l_sidebar_left             = false;


// **************************************************************************************************
// RTL Support
// **************************************************************************************************

$one->l_rtl                      = true;


// **************************************************************************************************
// MAIN MENU
// **************************************************************************************************

$one->main_nav                   = array(
    array(
        'name'  => 'Dashboard',
        'icon'  => 'si si-speedometer',
        'url'   => 'gs_rtl_backend.php'
    ),
    array(
        'name'  => 'Heading',
        'type'  => 'heading'
    ),
    array(
        'name'  => 'Dropdown',
        'icon'  => 'si si-puzzle',
        'sub'   => array(
            array(
                'name'  => 'Link #1',
                'url'   => 'javascript:void(0)'
            ),
            array(
                'name'  => 'Link #2',
                'url'   => 'javascript:void(0)'
            )
        )
    )
);
