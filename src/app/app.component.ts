import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FileDatabase, FileNode } from './service/filedatabase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FileDatabase, FileNode]
})

export class AppComponent implements AfterViewInit {
  treeControl: NestedTreeControl<FileNode>;
  dataSource: MatTreeNestedDataSource<FileNode>;
  title = 'Design Guidelines';
  path = '/tables';
  @ViewChild('tree') tree;

  components = [
    {
      title: 'Buttons',
      routerlink: '/buttons',
      readme: 'app/components/buttons/readme.md',
      html: 'app/components/buttons/buttons.component.html',
      ts: 'app/components/buttons/buttons.component.ts',
      css: 'app/components/buttons/buttons.component.scss'
    },
    {
      title: 'Checkbox',
      routerlink: '/checkbox',
      readme: 'app/components/checkbox/readme.md',
      html: 'app/components/checkbox/buttons.component.html',
      ts: 'app/components/checkbox/buttons.component.ts',
      css: 'app/components/checkbox/buttons.component.scss'
    },
    {
      title: 'Tables',
      routerlink: '/tables',
      readme: 'app/components/tables/readme.md',
      html: 'app/components/tables/buttons.component.html',
      ts: 'app/components/tables/buttons.component.ts',
      css: 'app/components/tables/buttons.component.scss'
    }
  ];

  constructor(database: FileDatabase, private router: Router) {
    this.treeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.dataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.dataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.content;

  private _getChildren = (node: FileNode) => node.children;


  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }

}
