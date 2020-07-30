<?php
/*
   Plugin Name: Reanimate On Scroll
   Version: 1.0.0
   Author: Jack Biles
   Description: Simple and easy to use plugin which allows reanimation on each time the element is scrolled past (up or down)
   License: GPLv3
*/

defined( 'ABSPATH' ) or die( 'No direct access!' );


function posts_2_posts_required() {
   $url = network_admin_url( 'plugin-install.php?tab=search&type=term&s=Animate+It&plugin-search-input=Search+Plugins' );
   echo '
   <div class="notice">
       <p><a href="' . $url . '">Animate It!</a> is required for Reanimate On Scroll To Work</p>
   </div>
   ';
}

function check_required_plugins() {
   if ( current_user_can( 'activate_plugins' ) ) {
       include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
       if ( ! is_plugin_active( 'animate-it/edsanimate.php' ) )
           add_action( 'admin_notices', 'posts_2_posts_required' );
   }
}
add_action( 'plugins_loaded', 'check_required_plugins' );

wp_enqueue_script('jquery'); // Load jQuery
wp_enqueue_script( 'reanimate-scroller-wordpress-javascript', plugins_url( '/libs/index.js', __FILE__ ), array() ); //Load JS file
