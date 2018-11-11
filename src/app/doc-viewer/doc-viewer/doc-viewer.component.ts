import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomComponent } from '../../service/component/customcomponent.model';
import { ComponentService } from '../../service/component/components.service';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material';


@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  @ViewChild('matTabs') matTabs: MatTabGroup;
  customComponent: CustomComponent;
  show = false;
  showts = false;
  showcss = false;

  constructor(private componentService: ComponentService,
    private router: Router) { }

  ngOnInit() {
    this.customComponent = this.componentService.getCurrentComponent();
    if (this.customComponent === undefined) {
      this.customComponent = JSON.parse(localStorage.getItem('customComponent'));
    } else {
      localStorage.setItem('customComponent', JSON.stringify(this.customComponent));
    }
    this.router.navigate([this.customComponent.routerlink]);
  }

  onTabChanged() {
    if (this.matTabs.selectedIndex === 1) {
      this.showts = true;
    } else if (this.matTabs.selectedIndex === 2) {
      this.showcss = true;
    }
  }

  showCode() {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

}
