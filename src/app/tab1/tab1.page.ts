import { Component } from '@angular/core';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  capStyle = false;
  constructor(private platformService: PlatformService) { }

  change() {
    this.platformService.capStyle = this.capStyle;
  }

}
