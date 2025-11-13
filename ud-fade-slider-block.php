<?php

/**
 * Plugin Name:     UD Block: Fade Slider
 * Description:     Ein responsiver Fade-Slider mit frei belegbaren Slides.
 * Version:         1.0.0
 * Author:          ulrich.digital gmbh
 * Author URI:      https://ulrich.digital/
 * License:         GPL v2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     fade-slider-ud
 */

function ud_fade_slider_register_blocks() {
    $dir = __DIR__;

    // Editor-Script
    $editor_script = 'ud-fade-slider-editor';
    $editor_script_path = "$dir/build/editor-script.js";
    $editor_script_url  = plugins_url('build/editor-script.js', __FILE__);
    $editor_script_ver  = file_exists($editor_script_path) ? filemtime($editor_script_path) : false;

    wp_register_script(
        $editor_script,
        $editor_script_url,
        [ 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' ],
        $editor_script_ver
    );

    // Frontend-Script
    $frontend_script = 'ud-fade-slider-frontend';
    $frontend_script_path = "$dir/build/frontend-script.js";
    $frontend_script_url  = plugins_url('build/frontend-script.js', __FILE__);
    $frontend_script_ver  = file_exists($frontend_script_path) ? filemtime($frontend_script_path) : false;

    wp_register_script(
        $frontend_script,
        $frontend_script_url,
        [],
        $frontend_script_ver,
        true
    );

    // Blöcke registrieren
    register_block_type( "$dir/fade-slider-block", [
        'editor_script' => $editor_script,
    	'view_script'   => $frontend_script, // ← nur Frontend / View
    ]);

    register_block_type( "$dir/fade-slide-item", [
        'editor_script' => $editor_script,
    ]);
}
add_action( 'init', 'ud_fade_slider_register_blocks' );
