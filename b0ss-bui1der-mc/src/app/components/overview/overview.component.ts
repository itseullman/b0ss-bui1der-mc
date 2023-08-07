import { AfterViewChecked, Component, Input} from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewChecked {

  constructor(private headerSvc: HeaderService) {}

  ngAfterViewChecked(): void {
    this.headerSvc.title = 'Overview';
    if(!this.headerSvc.subtitle) {this.headerSvc.subtitle = 'new b0ss'}
    this.headerSvc.backUrl = '/home';
  }

}
