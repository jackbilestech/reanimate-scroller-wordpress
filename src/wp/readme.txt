=== Plugin Name ===
Plugin Name: Reanimate On Scroll
Tags: animation, scroll, interface, experience
Requires at least: 4.7
Tested up to: 5.4
Stable tag: 4.3
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Simple and easy to use plugin which allows reanimation on each time the element is scrolled past (up or down)

== Description ==

## What Problem Does It Solve

It means you don't have to formulate any fancy way to reanimate animations each time a user scrolls the page. [Animate.it](https://animate.style/) is super useful but it's ability to reanimate on scroll is fairly limited (espeically in WP) and pretty lackluster, the other animation triggers work really well, such as `Click` and `Hover`. 

Alterntivley, you can call any other type of animation scrips that use this style of inserting animations into the DOM.

Even better, you can just use the raw JavaScript file in any project that uses the dom

## Pre-Requiesites

[Animate It! for WordPress](https://wordpress.org/plugins/animate-it/)
[jQuery](https://jquery.com/download/)

## How To Use It

```html
<div class="scroller disappear-fadeOut animated fadeIn duration1 delay1"></div>
```

## How It Works

This script continuously monitors the top of the screen and the view port height (bottom of the screen). When an element is about to leave the screen, the `animationName` in `disappear-<animationName>` get's applied to the tag, invoking the animation. When the element returns back into the screen, the `animationName` get's removed, invoking the original animation applied in the `class` attribute.

Basically, use your animation as normal, just apply the additional class names into the `class` and it will work fine.

== Frequently Asked Questions ==

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is stored in the /assets directory.
2. This is the second screen shot

== Changelog ==

= 1.0.0 =
* Initial Release=== Plugin Name ===
Plugin Name: Reanimate On Scroll
Tags: animation, scroll, interface, experience
Requires at least: 4.7
Tested up to: 5.4
Stable tag: 4.3
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Simple and easy to use plugin which allows reanimation on each time the element is scrolled past (up or down)

== Description ==

## What Problem Does It Solve

It means you don't have to formulate any fancy way to reanimate animations each time a user scrolls the page. [Animate.it](https://animate.style/) is super useful but it's ability to reanimate on scroll is fairly limited (espeically in WP) and pretty lackluster, the other animation triggers work really well, such as `Click` and `Hover`. 

Alterntivley, you can call any other type of animation scrips that use this style of inserting animations into the DOM.

Even better, you can just use the raw JavaScript file in any project that uses the dom

## Pre-Requiesites

[Animate It! for WordPress](https://wordpress.org/plugins/animate-it/)
[jQuery](https://jquery.com/download/)

## How To Use It

```html
<div class="scroller disappear-fadeOut animated fadeIn duration1 delay1"></div>
```

## How It Works

This script continuously monitors the top of the screen and the view port height (bottom of the screen). When an element is about to leave the screen, the `animationName` in `disappear-<animationName>` get's applied to the tag, invoking the animation. When the element returns back into the screen, the `animationName` get's removed, invoking the original animation applied in the `class` attribute.

Basically, use your animation as normal, just apply the additional class names into the `class` and it will work fine.

== Frequently Asked Questions ==

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is stored in the /assets directory.
2. This is the second screen shot

== Changelog ==

= 1.0.0 =
* Initial Release