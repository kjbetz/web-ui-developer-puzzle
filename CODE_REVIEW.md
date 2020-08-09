# T-Mobile Web UI Developer Puzzle Code Review

## Code

## Lighthouse accessibility check

### Names and labels
- Buttons do not have an accessible name

### Contrast
- Background and foreground colors do not have a sufficient contrast ratio
    - Change background color?
        - Changed pink accent color to #e20074 (T-Mobile site color)
    - Increase weight?
    - False positive white on "transparent" background?

## Accessibility manual check

### Chrome Lighthouse manual checks

    - Logical tab order? I'm not sure, I think maybe search bar should be first, then search button, then reading list
    - Interactive controls are keyboard focusable - check
