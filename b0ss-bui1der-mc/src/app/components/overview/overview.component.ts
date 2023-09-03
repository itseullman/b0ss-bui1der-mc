import { AfterViewChecked, Component} from '@angular/core';
import { BundleService } from 'src/app/services/bundle.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewChecked {

  constructor(private headerSvc: HeaderService, private bundleSvc: BundleService) {}

  ngAfterViewChecked(): void {
    this.headerSvc.title = 'Overview';
    this.headerSvc.subtitle = this.bundleSvc.bundle.boss.name ? this.bundleSvc.bundle.boss.name : 'new b0ss';
    this.headerSvc.backUrl = '/home';
  }

  beginExport() {
    this.bundleSvc.export();
  }

}
