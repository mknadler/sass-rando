# Rando

A small collection of functions and mixins to help you make the most out of Sass's built-in `random()` function.

Need to apply a Fisher-Yates shuffle to a list? Want to roll 2d6 in Sass? Want to randomly blend two colors? Randomize might be useful for you; it makes otherwise-frustrating tasks like [randomly animating SVGs with dozens of elements](http://codepen.io/mknadler/pen/EaWeeo) simple to implement.

[Here's some of what you can do with it](http://codepen.io/mknadler/full/LEyxxG/).

Stuck? [Check out the docs](http://mknadler.github.io/randomize.scss/).

Randomize.scss requires Ruby Sass 3.3.0+.
Currently, LibSass computes random numbers differently enough from Ruby Sass that this library as a whole is not LibSass compatible (at least as of LibSass 3.1); feel free to cherrypick specific functions for your own use.

## How To Install

`bower install randomize.scss`, `git clone`, or simply copy-and-paste the contents of the `sass/` folder.

## Questions?

More will be added soon; in the meantime, please feel free to request specific features, make a PR, or [get in touch](https://twitter.com/antimytheme).

Thanks to [@jshawl](http://github.com/jshawl), [@hugogiraudel](http://github.com/hugogiraudel), and [@nickmasso](http://github.com/nickmasso) for contributing!
