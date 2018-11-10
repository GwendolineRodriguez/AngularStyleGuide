import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { CustomComponent } from '../models/customcomponent';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-code-card',
  templateUrl: './code-card.component.html',
  styleUrls: ['./code-card.component.scss']
})
export class CodeCardComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;
  @Input() customComponent: CustomComponent;
  show = false;

  constructor() { }

  ngOnInit() {
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
