# Checkbox
<mat-checkbox> provides the same functionality as a native <input type="checkbox"> enhanced with Material Design styling and animations.
 Checkbox label

The checkbox label is provided as the content to the <mat-checkbox> element. The label can be positioned before or after the checkbox by setting the labelPosition property to 'before' or 'after'.

If you don't want the label to appear next to the checkbox, you can use aria-label or aria-labelledby to specify an appropriate label.

 Use with @angular/forms

<mat-checkbox> is compatible with @angular/forms and supports both FormsModule and ReactiveFormsModule.

 Indeterminate state

<mat-checkbox> supports an indeterminate state, similar to the native <input type="checkbox">. While the indeterminate property of the checkbox is true, it will render as indeterminate regardless of the checked value. Any interaction with the checkbox by a user (i.e., clicking) will remove the indeterminate state.

 Click action config

When user clicks on the mat-checkbox, the default behavior is toggle checked value and set indeterminate to false. This behavior can be customized by providing a new value of MAT_CHECKBOX_CLICK_ACTION to the checkbox.

```javascript
providers: [
  {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
]
```

The possible values are:

 noop

Do not change the checked value or indeterminate value. Developers have the power to implement customized click actions.

 check

Toggle checked value of the checkbox, ignore indeterminate value. If the checkbox is in indeterminate state, the checkbox will display as an indeterminate checkbox regardless the checked value.

 check-indeterminate

Default behavior of mat-checkbox. Always set indeterminate to false when user click on the mat-checkbox. This matches the behavior of native <input type="checkbox">.