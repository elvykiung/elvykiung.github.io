#Update CSS Variables with JS

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Overview](#Code-Overview)
- [Sources](#Sources)

## General info

Allow user to change HTML CSS style by clicking/mouse moving the page

![Image](final_look.gif)

## Technologies

Project is created with:

- JavaScript ES6
- HTML 5 & CSS

## Setup

To run this project, download entier package and open it in web browser or

Clone this repo to your desktop and run npm install to install all the dependencies.

## Code Overview

### Summary

1. Setting variable with CSS style with [CSS Variable](https://www.w3schools.com/css/css3_variables.asp)

2. Using JavaScript to update the change base on user input

## JavaScript Function explain

1. Select input on the page

   `.querySelectorAll` give you a note list of selector(i.e in this case 3 list of input from the html). Its only have coupl of method can call such as forEach, keys, length, etc

   `('.controls input')` selectin all the input that have class="controls"

2. Creating a function to handle the Update

3. [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) method calls a provided function once for each element in an array, in order

```
inputs.forEach(input => input.addEventListener('change', handleUpdate));

```

## HTML layout

```
<label for="spacing">Spacing:</label>

<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />
```

## CSS style

1. Declar the CSS variable at the highest element global scope `:root{}`

   The variable name must begin with two dashes (--) and is case sensitive!

```
<style>
 :root {
        --base: #ffc600;
        --spacing: 10px;
        --blur: 10px;
      }
</style>
```

2. Using the variable in css paddind: `var(--spacing)`. Therefore when you change the value on `--base: #ffc600;` declaration, it will change the element that using the variable

```
 img {
        padding: var(--spacing);
        background: var(--base);
      }
```

3. CSS [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

## Sources

[JavaScript30](https://javascript30.com) is a free crouse provided by [Wes Bos](https://github.com/wesbos)
