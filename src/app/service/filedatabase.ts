import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

const TREE_DATA = JSON.stringify({
  Design: {
    Colors: '/colors',
    Colorscheme: 'app-colors',
  },
  Components: {
    buttons: {
      routerlink: '/buttons',
      readme: 'app/components/buttons/readme.md',
      html: 'app/components/buttons/buttons.component.html',
      ts: 'app/components/buttons/buttons.component.ts',
      css: 'app/components/buttons/buttons.component.scss'

    },
    checkbox: {
      routerlink: '/checkbox',
      readme: 'app/components/checkbox/readme.md',
      html: 'app/components/checkbox/buttons.component.html',
      ts: 'app/components/checkbox/buttons.component.ts',
      css: 'app/components/checkbox/buttons.component.scss'
    },
    tables: {
      routerlink: '/tables',
      readme: 'app/components/tables/readme.md',
      html: 'app/components/tables/buttons.component.html',
      ts: 'app/components/tables/buttons.component.ts',
      css: 'app/components/tables/buttons.component.scss'
    }
  },
});

@Injectable({ providedIn: 'root' })
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }
  buildFileTree(obj: {[key: string]: any}, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}
