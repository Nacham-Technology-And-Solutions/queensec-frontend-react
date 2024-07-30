<?php
/**
 * get_started/backend/config.php
 *
 * Author: pixelcave
 *
 * Get Started Backend configuration file
 *
 */

// **************************************************************************************************
// INCLUDED VIEWS
// **************************************************************************************************

$one->inc_side_overlay           = 'inc/get_started/backend/views/inc_side_overlay.php';
$one->inc_sidebar                = 'inc/get_started/backend/views/inc_sidebar.php';
$one->inc_header                 = 'inc/get_started/backend/views/inc_header.php';
$one->inc_footer                 = 'inc/get_started/backend/views/inc_footer.php';


// **************************************************************************************************
// MAIN CONTENT
// **************************************************************************************************

$one->l_m_content                = 'narrow';


// **************************************************************************************************
// MAIN MENU
// **************************************************************************************************

$one->main_nav                   = array(
    array(
        'name'  => 'Dashboard',
        'icon'  => 'si si-speedometer',
        'url'   => 'gs_backend.php'
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
