import {  AfterViewChecked, Component } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'b0b1-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {

  ngAfterViewChecked(): void {
    HeaderComponent.title = '';
    HeaderComponent.subtitle = '';
    HeaderComponent.backUrl = '';
  }

}
