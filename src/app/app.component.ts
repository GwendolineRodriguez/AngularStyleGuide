import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentService } from './service/components.service';
import { CustomComponent } from './models/customcomponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Style Guide';
  components: CustomComponent[];
  readme = 'assets/README.md';
  defaultComponent: CustomComponent = {
    name: 'Style Guide',
    routerlink: '/home',
    readme: 'assets/README.md',
    html: 'app/components/buttons/buttons.component.html',
    ts: 'app/components/buttons/buttons.component.ts',
    css: 'app/components/buttons/buttons.component.scss'
  };
  customComponent: CustomComponent;
  isComponent = false;

  constructor(private componentService: ComponentService, private router: Router) {
  }

  getComponents() {
    this.components = this.componentService.getComponents();
  }

  ngOnInit() {
    this.customComponent = this.defaultComponent;
    this.getComponents();
  }

  setDocuments(component) {
    console.log(component);
    this.customComponent = component;
  }

  setComponentState(state) {
    this.isComponent = state;
  }
}
