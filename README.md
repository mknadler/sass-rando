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


