import { AfterViewChecked, Component} from '@angular/core';
import { BundleService } from 'src/app/services/bundle.service';
import { HeaderService } from 'src/app/services/header.service';
import { Coordinate } from 'src/app/utilities/coordinate.model';

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

  testData() {
    this.bundleSvc.bundle.boss.name = 'Testero';
    this.bundleSvc.bundle.boss.tag = 'tstr';
    this.bundleSvc.bundle.boss.type = 'minecraft:zombie';
    this.bundleSvc.bundle.boss.data = '{glowing:1b}';
    this.bundleSvc.bundle.arena.center.x = '1';
    this.bundleSvc.bundle.arena.center.y = '2';
    this.bundleSvc.bundle.arena.center.z = '3';
    this.bundleSvc.bundle.arena.radius = 4;
    this.bundleSvc.bundle.arena.entryPoints.push(new Coordinate());
    this.bundleSvc.bundle.arena.entryPoints[0].x = '5';
    this.bundleSvc.bundle.arena.entryPoints[0].y = '6';
    this.bundleSvc.bundle.arena.entryPoints[0].z = '7';
    this.bundleSvc.bundle.arena.exitPoints.push(new Coordinate());
    this.bundleSvc.bundle.arena.exitPoints[0].x = '8';
    this.bundleSvc.bundle.arena.exitPoints[0].y = '9';
    this.bundleSvc.bundle.arena.exitPoints[0].z = '10';
    for(let i = 0; i < 5; ++i) {
      this.bundleSvc.addMinion();
      this.bundleSvc.bundle.minions[i].data = '{glowing:1b}';
      this.bundleSvc.bundle.minions[i].type = 'minecraft:skeleton';
      this.bundleSvc.bundle.minions[i].spawnCount = Math.floor(Math.random() * 30);
      this.bundleSvc.bundle.minions[i].spawnTimer.seconds = Math.floor(Math.random() * 60);
    }
  }

}
