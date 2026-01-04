# Journey

## 21/12/25

- I created variables and utilised @font-face to reduce dependency on Google api.
- I utilised the font long hand declaration to reduce complexity in the coding process later. Tradeoffs are that it would make text slightly harder to experiment with, however I'm just coding to specs.
- I created css files that would handle the fundamental screen dimension requirements - mob, tab, dsk

## 22/12/25

- I created a responsive picture system, that updates the main image in HTML markup as opposed to in CSS with \<picture>, \<source> and \<img>. As explained in the article `Responsive Images` in the section [https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images#why_cant_we_just_do_this_using_css_or_javascript](Why can't we just do this using css or JavaScript), the browser needs a way to know about formatting up front, using the picture, source and img combination allows the browser to load only the image it needs, just in time for optimal performance. It's probably not strictly necessary when using an svg as the quality is lossless, but it's still a good general practice when using images.
- I created the mobile modal design. I'm still struggling conceptually with margin vs padding, so I think I'll read over that before I start the next code implementation round.

## 23/12/25

I added styles to the main section. I removed 100vh from the body as this caused a loss of content. I have managed to fix the image rendering issue. Now I have two images rendering inside the wrapper for tab and dsk screen sizes and an image rendering outside the wrapper for mobile devices.

## 27/12/25

I removed fixed height from the body and replaced with min-height. Which fixed all sorts of issues. I also realised I was using `padding-block` wrong as I was only including a single value. This helped me to clean up my code a bit. I got rid of a bunch of comments. This process has come to close for the main element, but the next step is to repeat for the .modal element.

## 04/01/2026

Refactoring the code