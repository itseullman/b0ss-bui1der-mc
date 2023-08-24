import { AfterViewChecked, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Minion } from 'src/app/models/minion.model';
import { BundleService } from 'src/app/services/bundle.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-minions',
  templateUrl: './minions.component.html',
  styleUrls: ['./minions.component.css']
})
export class MinionsComponent implements AfterViewChecked {

  public minions: Minion[];

  constructor(private router: Router, private route: ActivatedRoute, private headerSvc: HeaderService, private bundleSvc: BundleService) {
    this.minions = this.bundleSvc.bundle.minions;
  }

  ngAfterViewChecked(): void {
    this.headerSvc.title = 'Minions';
    this.headerSvc.subtitle = this.bundleSvc.bundle.boss.name ? this.bundleSvc.bundle.boss.name : 'new b0ss';
    this.headerSvc.backUrl = '/home';
  }

  addMinion() {
    this.bundleSvc.addMinion();
  }

  deleteMinion(name: string) {
    this.bundleSvc.deleteMinion(name);
    if(this.route.snapshot.firstChild?.params['name'] === name) {
      this.router.navigate(['.'], {relativeTo: this.route});
    }
  }

}
