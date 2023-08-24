import {  AfterViewChecked, Component } from '@angular/core';
import { BundleService } from 'src/app/services/bundle.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {

  constructor(private headerSvc: HeaderService, private bundleSvc: BundleService) {}

  ngAfterViewChecked(): void {
    this.headerSvc.title = '';
    this.headerSvc.subtitle = '';
    this.headerSvc.backUrl = '';
  }

  logBundle() {
    this.bundleSvc.outputBundle();
  }

}
