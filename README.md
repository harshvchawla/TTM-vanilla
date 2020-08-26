# Discussions
Query) Hey, does anyone here have any experience with manipulating SVG’s with either CSS or Javascript? Im working on a website for the Toronto Tech Mentoring project and could use the help!

Im trying to scale an svg and use it as a background for some text, however the viewbox is cutting off the the graphic, the other issues I have are also related to scaling.

# ) Suggestions
- bootstrap css
- preserveAspectRatio="none" (see https://css-tricks.com/scale-svg/#:~:text=The%20SVG%20Scaling%20Toolbox,is%20possible%20with%20other%20images.)
- svg 100x100 coordinate system of viewbox (separate from width/height properties of svg)
- split css (or any file) when it grows