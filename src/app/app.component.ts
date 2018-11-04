import { Component, OnInit } from '@angular/core';
import { ComponentService } from './service/components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Design Guidelines';

  components: any[];

  constructor(private componentService: ComponentService) {
  }

  getComponents() {
    this.components = this.componentService.getComponents();
  }

  ngOnInit() {
    this.getComponents();
  }

}
