# The simple color swatches
The simple app that will generate the color for both type; RGB and HSL

## Getting Start
  ```
  clone the repo
  
  npm i
  
  npm run dev
  ```
  

## Technology Stack
TypeScript

React with Nextjs

## How to extend new type of support color

New type of color can be implement by extend from ColorBase interface so it should have the property "type" and "id" to indentify

And then add the logic how the new type of color will be coverted to css color valid property

One thing that I think it better is to find the way to automatically convert all type of color into 1 type before render

let's say the input type is hsl, cymk etc. there should be a way to convert any type to rgb and render in the DOM

if it is a well-known type I can find the formula or using some color converting library but with some strange type like ***BRGB in the problem*** I think it need to specifically insert the convert logic manually.
