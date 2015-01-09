# Randomize.scss

A small collection of functions and mixins to help you make the most out of Sass's built-in `random()` function.

More will be added soon; in the meantime, please feel free to request specific features, make a PR, or (especially!) let me know if anything's buggy.

###random-between
`random-between( $min, $max );`

Given a required `$min` and `$max`,  returns a random number inside of that range, inclusive of both `$min` and `$max`.

Example usage:

`line-height: random-between(2, 3);`


###random-hex
`random-hex();`

Returns a random hex color.

Example usage:

`border: 1px solid random-hex();`

###random-rgba
`random-rgba( $multiplier:(1,1,1), $opacity:false);`

Returns a random RGBa value.

Can optionally pass in a list of multipliers and/or an opacity value. 

`$multiplier` accepts a *list* of numbers which may be used to impact the chances of the generated color/s skewing in a certain direction.

The multiplier works because Sass clamps color values to a max of 255; if you pass a multiplier of 5 for red, it will compile to random (255*5) => random(1275), which means a roughly 80% chance of getting a red value of 255.

For grayscale, keep all values very low.

Example usage:

`background: random-rgba((.3,.2,1), .7)`;

###random-value 
Given a list of values, returns one of those values.

Example usage:

<code>$timing-functions: ease, ease-in, ease-in-out, linear;
transition: 3s random-value($timing-functions);</code>

###shuffle
`shuffle($list);`

Given a list, returns that same list, shuffled Fisher-Yates style.

Example usage:

`margin: shuffle(40px 40px 80px 90px)`

###random-animate
`@include random-animate($num-elements, $animation-name, $prop-to-animate, $function-name, $animation-props: 3s ease, $steps:2);`

For a given number of nth-children of a certain element, creates a keyframe and animation for each element which takes advantage of one of the other functions in the library.

`$animation-name` is only important to prevent naming conflicts, if you happen to be randomly animating more than one type of element on a page.

Example usage: 
`div { @include random-animate(20, colorize, background, random-hex, 4s ease-out infinite alternate, 4); }`
This would create 20 keyframes and animations for each div:nth-child between 1 and 20, each animating between four different colors.

###random-iterate
`@include random-iterate($number-of-items, $property, $function);`

Given a number of elements, a function, and a property, applies that function for that property for each of those elements, using nth-child.

Example usage, given 10 divs:
`div { @include random-iterate(10, background, random-hex); }`