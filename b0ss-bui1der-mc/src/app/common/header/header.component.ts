import { Component } from '@angular/core';

@Component({
  selector: 'b0b1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  static title: string = '';
  static subtitle: string = '';
  static backUrl: string = '';

  getTitle(): string {
    return HeaderComponent.title;
  }

  getSubtitle(): string {
    return HeaderComponent.subtitle;
  }

  getBackUrl(): string {
    return HeaderComponent.backUrl;
  }
}