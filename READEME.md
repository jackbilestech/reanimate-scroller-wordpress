# Reanimate Scroller WordPress

Simple and easy to use plugin which allows reanimation on eahc time the element is scrolled past (up or down)

## What Problem Does It Solve?

It means you don't have to formulate any fancy way to reanimate animations each time a user scrolls the page. [Animate.it](https://animate.style/) is super useful but it's ability to reanimate on scroll is fairly limited (espeically in WP) and pretty lackluster, the other animation triggers work really well, such as `Click` and `Hover`. 

Alterntivley, you can call any other type of animation scrips that use this style of inserting animations into the DOM.

## Pre-Requiesites
[Animate It! for WordPress](https://wordpress.org/plugins/animate-it/)

## How To Use It?

```html
<div class="scroller disappear-fadeOut animated fadeIn duration1 delay1"></div>
```

## How It Works?

This script contiously monitors the top of the screen and the viewport height (bottom of the screen). When an element is about to leave the screen, the `animationName` in `disappear-<animationName>` get's applied to the tag, invoking the animation. When the element returns back into the screen, th`animationName` egt's removed, invoking the original animation aplied in the `class` attribute.

Basically, use your animation as normal, just apply the additonal class names into the `class` and it will work fine.