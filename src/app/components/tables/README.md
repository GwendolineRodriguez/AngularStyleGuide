# Table
The mat-table provides a Material Design styled data-table that can be used to display rows of data.

This table builds on the foundation of the CDK data-table and uses a similar interface for its data input and template, except that its element and attribute selectors will be prefixed with mat- instead of cdk-. For more information on the interface and a detailed look at how the table is implemented, see the guide covering the CDK data-table.

1. Write your mat-table and provide data

Begin by adding the <table mat-table> component to your template and passing in data.

The simplest way to provide data to the table is by passing a data array to the table's dataSource input. The table will take the array and render a row for each object in the data array.
```javascript
<table mat-table [dataSource]=”myDataArray”>
  ...
</table>
```
Since the table optimizes for performance, it will not automatically check for changes to the data array. Instead, when objects are added, removed, or moved on the data array, you can trigger an update to the table's rendered rows by calling its renderRows() method.

While an array is the simplest way to bind data into the data source, it is also the most limited. For more complex applications, using a DataSource instance is recommended. See the section "Advanced data sources" below for more information.

 2. Define the column templates

Next, write your table's column templates.

Each column definition should be given a unique name and contain the content for its header and row cells.

Here's a simple column definition with the name 'userName'. The header cell contains the text "Name" and each row cell will render the name property of each row's data.
```javascript
<ng-container matColumnDef="userName">
  <th mat-header-cell *matHeaderCellDef> Name </th>
  <td mat-cell *matCellDef="let user"> {{user.name}} </td>
</ng-container>
```