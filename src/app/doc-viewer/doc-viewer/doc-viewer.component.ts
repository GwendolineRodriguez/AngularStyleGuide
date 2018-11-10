import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomComponent } from '../../models/customcomponent';
import { ComponentService } from '../../service/components.service';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;
  customComponent: CustomComponent;
  show = false;

  constructor(private componentService: ComponentService) { }

  ngOnInit() {
    this.customComponent = this.componentService.getCurrentComponent();
  }

  onTabChanged() {
    console.log('yalaaa');
  }

  showCode() {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

}
