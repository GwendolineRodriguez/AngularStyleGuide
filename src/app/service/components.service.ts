import { Injectable } from '@angular/core';
import { CustomComponent } from '../models/customcomponent';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  currentComponent: CustomComponent;
  components: CustomComponent[] = [
    {
      name: 'Buttons',
      routerlink: '/buttons',
      readme: 'app/doc-viewer/components/buttons/README.md',
      html: 'app/doc-viewer/components/buttons/buttons.component.html',
      ts: 'app/doc-viewer/components/buttons/buttons.component.ts',
      css: 'app/doc-viewer/components/buttons/buttons.component.scss'
    },
    {
      name: 'Checkbox',
      routerlink: '/checkbox',
      readme: 'app/doc-viewer/components/checkbox/README.md',
      html: 'app/doc-viewer/components/checkbox/checkbox.component.html',
      ts: 'app/doc-viewer/components/checkbox/checkbox.component.ts',
      css: 'app/doc-viewer/components/checkbox/checkbox.component.scss'
    },
    {
      name: 'Tables',
      routerlink: '/tables',
      readme: 'app/doc-viewer/components/tables/README.md',
      html: 'app/doc-viewer/components/tables/tables.component.html',
      ts: 'app/doc-viewer/components/tables/tables.component.ts',
      css: 'app/doc-viewer/components/tables/tables.component.scss'
    }
  ];
  constructor() { }

  getComponents(): CustomComponent[] {
    return this.components;
  }

  getCurrentComponent() {
    this.currentComponent = this.components[0];
    return this.currentComponent;
  }

  createComponents() {

  }

}
