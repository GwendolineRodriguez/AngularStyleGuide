import { Injectable } from '@angular/core';
import { CustomComponent } from './customcomponent.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  currentComponent: CustomComponent;
  components: CustomComponent[] = [
    {
      name: 'Button',
      routerlink: '/button',
      readme: 'app/doc-viewer/components/button/README.md',
      html: 'app/doc-viewer/components/button/button.component.html',
      ts: 'app/doc-viewer/components/button/button.component.ts',
      css: 'app/doc-viewer/components/button/button.component.scss'
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
      name: 'Table',
      routerlink: '/table',
      readme: 'app/doc-viewer/components/table/README.md',
      html: 'app/doc-viewer/components/table/table.component.html',
      ts: 'app/doc-viewer/components/table/table.component.ts',
      css: 'app/doc-viewer/components/table/table.component.scss'
    }
  ];
  constructor() { }

  getComponents(): CustomComponent[] {
    return this.components;
  }

  getCurrentComponent() {
    return this.currentComponent;
  }

  setCurrentComponent(component) {
    this.currentComponent = component;
  }

  createComponents() {

  }

}
