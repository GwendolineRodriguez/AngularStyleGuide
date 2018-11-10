import { Component, OnInit } from '@angular/core';
import { CustomComponent } from '../../models/customcomponent';
import { ComponentService } from '../../service/components.service';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  customComponent: CustomComponent;

  constructor(private componentService: ComponentService) { }

  ngOnInit() {
    this.customComponent = this.componentService.getCurrentComponent();
  }

}
