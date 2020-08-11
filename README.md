# Reanimate Scroller WordPress

Simple and easy to use plugin which allows reanimation on each time the element is scrolled past (up or down)

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

This script contiously monitors the top of the screen and the viewport height (bottom of the screen). When an element is about to leave the screen, the `animationName` in `disappear-<animationName>` get's applied to the tag, invoking the animation. When the element returns back into the screen, the `animationName` get's removed, invoking the original animation aplied in the `class` attribute.

Basically, use your animation as normal, just apply the additonal class names into the `class` and it will work fine.

## How To Test In Wordpress

- Navigate to the `test/wp` diretory in this repo.
- Start your `phpMyAdmin` service.
- Create a new databse called `dev`.
  - Alternatively, [change](https://wordpress.org/support/article/editing-wp-config-php/) the `wp-config.php` to match your databse needs.
- In the browser, navigate to `localhost/<this-repo-name>/test/wp`
- Finish WordPres installing
- Install & Activate [Animate.it](https://animate.style/)
- Activate `Reanimate On Scroll`