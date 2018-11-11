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
  customComponent: CustomComponent;

  constructor(private componentService: ComponentService, private router: Router) {
  }

  ngOnInit() {
    this.components = this.componentService.getComponents();
    this.customComponent = this.componentService.getCurrentComponent();
  }

  setDocuments(component) {
    console.log(component);
    this.componentService.setCurrentComponent(component);
    this.customComponent = this.componentService.getCurrentComponent();
  }
}
