import {  AfterViewChecked, Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {

  constructor(private headerSvc: HeaderService) {}

  ngAfterViewChecked(): void {
    this.headerSvc.title = '';
    this.headerSvc.subtitle = '';
    this.headerSvc.backUrl = '';
  }

}
