import { Injectable } from '@angular/core';
import { Component } from '../models/component';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  components: Component[] = [
    {
      name: 'Buttons',
      routerlink: '/buttons',
      readme: 'app/components/buttons/readme.md',
      html: 'app/components/buttons/buttons.component.html',
      ts: 'app/components/buttons/buttons.component.ts',
      css: 'app/components/buttons/buttons.component.scss'
    },
    {
      name: 'Checkbox',
      routerlink: '/checkbox',
      readme: 'app/components/checkbox/readme.md',
      html: 'app/components/checkbox/buttons.component.html',
      ts: 'app/components/checkbox/buttons.component.ts',
      css: 'app/components/checkbox/buttons.component.scss'
    },
    {
      name: 'Tables',
      routerlink: '/tables',
      readme: 'app/components/tables/readme.md',
      html: 'app/components/tables/buttons.component.html',
      ts: 'app/components/tables/buttons.component.ts',
      css: 'app/components/tables/buttons.component.scss'
    }
  ];
  constructor() { }

  getComponents(): Component[] {
    return this.components;
  }

  createComponents() {

  }

}
