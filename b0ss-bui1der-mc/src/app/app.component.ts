import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'b0b1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderService]
})
export class AppComponent implements AfterViewChecked {

  @ViewChild('header') header!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewChecked(): void {
    if(!this.router.url.includes('home')) {
      this.header.nativeElement.setAttribute('style','height: 10%;');
      this.content.nativeElement.setAttribute('style','height: 90%;');
      this.footer.nativeElement.setAttribute('style','height: 0%;');
    } else {
      this.header.nativeElement.setAttribute('style','');
      this.content.nativeElement.setAttribute('style','');
      this.footer.nativeElement.setAttribute('style','');
    }
  }

}
