import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomComponent } from '../../service/component/customcomponent.model';
import { ComponentService } from '../../service/component/components.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;
  customComponent: CustomComponent;
  show = false;

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
  }

  showCode() {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

}
