# Button

Angular Material buttons are native `<button>` or `<a>` elements enhanced with Material Design styling and ink ripples.

Theming

Buttons can be colored in terms of the current theme using the color property to set the background color to primary, accent, or warn.

 Capitalization

According to the Material design spec button text has to be capitalized, however we have opted not to capitalize buttons automatically via text-transform: uppercase, because it can cause issues in certain locales. It is also worth noting that using ALL CAPS in the text itself causes issues for screen-readers, which will read the text character-by-character. We leave the decision of how to approach this to the consuming app.

 Accessibility

Angular Material uses native `<button>` and `<a>` elements to ensure an accessible experience by default. The `<button>` element should be used for any interaction that performs an action on the current page. The `<a>` element should be used for any interaction that navigates to another view.

Buttons or links containing only icons (such as mat-fab, mat-mini-fab, and mat-icon-button) should be given a meaningful label via aria-label or aria-labelledby.
