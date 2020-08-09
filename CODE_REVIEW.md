# T-Mobile Web UI Developer Puzzle Code Review

## Code

## Lighthouse accessibility check

### Names and labels
- Buttons do not have an accessible name
    - Failing item the icon only search button
        - Added aria-label to search, reading list close, remove from reading list
            - remove from reading list already done
        - Reading List nav, and Want to Read buttons should be OK

### Contrast
- Background and foreground colors do not have a sufficient contrast ratio
    - Button in nav bar
        - Change background color?
            - Changed pink accent color to #e20074 (T-Mobile site color)
        - Increase weight?
        - False positive white on "transparent" background?
    - p tag
        - Too light
        - Added $gray50 variable for #767676, changed text to use $gray50

## Accessibility manual check

### Chrome Lighthouse manual checks

    - Logical tab order? I'm not sure, I think maybe search bar should be first, then search button, then reading list
    - Interactive controls are keyboard focusable - check
