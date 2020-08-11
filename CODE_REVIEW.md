# T-Mobile Web UI Developer Puzzle Code Review

## Code

- Actions don't follow a standard naming style i.e.: ActionSuccess, confirmedAction, etc...
- Could make dumb components for item lists in both search results and reading list
- Can most likely change change detection strategy to OnPush
- No need to subscribe in component, can async pipe it in template
- Date pipe doesn't work? Custom pipe?

## Lighthouse accessibility check

### Names and labels

- ***Buttons do not have an accessible name***
  - Failing item the icon only search button (actually all/most icon buttons)
    - Added `aria-label` to icon buttons: search, reading list close, remove from reading list
      - remove from reading list already done
    - Reading List nav, and Want to Read buttons should be OK

### Contrast

- ***Background and foreground colors do not have a sufficient contrast ratio***
  - Button in nav bar
    - Change background color?
      - Changed `$pink-accent` color to `#e20074` (T-Mobile site color)
    - Increase weight?
    - False positive white on "transparent" background?
  - `<p>` tag
    - Too light
      - Added `$gray50` variable for `#767676`, changed text to use `$gray50`
  - Couldn't read text in empty reading list (didn't notice it was there really)
    - Increased font weight to normal and lowered to `$gray50` like body text

## Accessibility manual check

- Needed to check above items on reading list and search results list as Lighthouse didn't run on those elements

### Chrome Lighthouse manual checks

- Logical tab order?
  - I'm not sure, I think maybe search bar should be first, then search button, then reading list
  - After some more research, it appears it might be OK. Tab order is in order of DOM order and top to bottom, left to right
- Interactive controls are keyboard focusable - check
