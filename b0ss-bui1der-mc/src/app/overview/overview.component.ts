import { AfterViewChecked, Component, Input} from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'b0b1-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewChecked {

  ngAfterViewChecked(): void {
    HeaderComponent.title = 'Overview';
    if(!HeaderComponent.subtitle) {HeaderComponent.subtitle = 'new b0ss'}
    HeaderComponent.backUrl = '/home';
  }

  updateName(name: string) {
    HeaderComponent.subtitle = name;
  }

}
