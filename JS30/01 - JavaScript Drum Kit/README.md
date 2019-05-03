# JavaScript Drum Kit

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Overview](#Code-Overview)
- [Sources](#Sources)

## General info

This is an application allow user use keyborad to produce drum audio. When user press "A","S","D "F","G","H","J","K","L"; the buttom on the web will animate according to the key that pressed.

![Image](image/final_look.png)

## Technologies

Project is created with:

- JavaScript ES6
- HTML 5 & CSS

## Setup

To run this project, download entier package and open it in web browser or

Clone this repo to your desktop and run npm install to install all the dependencies.

## Code Overview

### Summary

1. key event handler
2. event listener
3. playing audio
4. css animation transition
5. listen to transition end with "this"

## JavaScript Function explain

_How to connet the keydown event with html_

- Get element from document using "querySelector" to select first matching element and put it in variable audio

  `.querySelector(audio[data-key = "${event.keyCode}"])`

  element in the document that has a "target" attribute:

  `document.querySelector("a[target]");`

_How to repeat the audio every time keydown event register (i.e play before firt audio finished play)_

- Set the currentTime property to 0 before play the audio. When setting this property, the playback will jump to the specified position.

  > audio.currentTime = 0;

  > audio.play();

## HTML layout

1. wrap all the key in the `.keys` class div
2. each keys has a class `.key` and `data-key`attribute
3. `<kbd>` tag is a phrase tag. It defines keyboard input.

```
<div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    .
    .
    .
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
.
.
.

```

## CSS style

### `.keys` class

1.  `display : flex` to make container div in one line horizontal display
2.  `min-height: 100vh`-- "vh" unit is Relative to 1% of the height of the viewport // % is Relative to the parent element
3.  The `align-items` property specifies the default alignment for items inside the flexible container"div".

### `.key` class

_How to animate the html element_

1. `transition: all 0.07s ease` -- which property : all (can be specific like "font-size of bg colour"| duration: 0.07s | timing-speed: ease

```
// reset css style after press function
// skip if its not a transform
//remove the css class after palying

function removeTransition(event) {

  if (event.propertyName !== "transform") return;

  this.classList.remove("playing")
}
```

### `.playing` class

1. `transform`-- allows you to rotate, scale, move, skew, etc., elements.---scale is make element bigger/smaller in scale (x,y)

### `kdb` tag

1. `display: block` make element display in one element in one line

## Sources

[JavaScript30](https://javascript30.com) is a free crouse provided by [Wes Bos](https://github.com/wesbos)
