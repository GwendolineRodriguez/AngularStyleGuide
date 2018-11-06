import { Component, OnInit } from '@angular/core';
import { ComponentService } from './service/components.service';
import { CustomComponent } from './models/customcomponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Design Guidelines';

  components: CustomComponent[];
  readme = 'assets/README.md';
  customComponent: CustomComponent = {
    name: 'Design Guidelines',
    routerlink: '/home',
    readme: 'assets/readme.md',
    html: 'app/components/buttons/buttons.component.html',
    ts: 'app/components/buttons/buttons.component.ts',
    css: 'app/components/buttons/buttons.component.scss'
  };

  constructor(private componentService: ComponentService) {
  }

  getComponents() {
    this.components = this.componentService.getComponents();
  }

  ngOnInit() {
    this.getComponents();
  }

  setDocuments(component) {
    console.log('here it goes !!!');
    console.log(component);
    this.customComponent = component;
  }
}
