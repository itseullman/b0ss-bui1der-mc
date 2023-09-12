import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Arena } from 'src/app/models/arena.model';
import { BundleService } from 'src/app/services/bundle.service';
import { HeaderService } from 'src/app/services/header.service';
import { Coordinate } from 'src/app/utilities/coordinate.model';

@Component({
  selector: 'b0b1-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements AfterViewChecked {

  public arena: Arena;

  @ViewChild('f') arenaForm!: NgForm;

  constructor(private headerSvc: HeaderService, private bundleSvc: BundleService) {
    this.arena = bundleSvc.bundle.arena;
  }

  ngAfterViewChecked(): void {
    this.headerSvc.title = 'Arena';
    this.headerSvc.backUrl = "bossview";

    if(this.arena.entryPoints[0]) {
      this.arenaForm.form.patchValue({
        'entry-point-x':this.arena.entryPoints[0].x, 
        'entry-point-y':this.arena.entryPoints[0].y, 
        'entry-point-z':this.arena.entryPoints[0].z
      });
    }
    else {
      this.arena.entryPoints.push(new Coordinate());
    }

    if(this.arena.exitPoints[0]) {
      this.arenaForm.form.patchValue({
        'exit-point-x':this.arena.exitPoints[0].x, 
        'exit-point-y':this.arena.exitPoints[0].y, 
        'exit-point-z':this.arena.exitPoints[0].z
      });
    }
    else {
      this.arena.exitPoints.push(new Coordinate());
    }
  }

  onSubmit() {
    this.arena.center.x = this.arenaForm.value['center-x'];
    this.arena.center.y = this.arenaForm.value['center-y'];
    this.arena.center.z = this.arenaForm.value['center-z'];

    this.arena.radius = this.arenaForm.value['radius'];

    this.arena.entryPoints[0].x = this.arenaForm.value['entry-point-x'];
    this.arena.entryPoints[0].y = this.arenaForm.value['entry-point-y'];
    this.arena.entryPoints[0].z = this.arenaForm.value['entry-point-z'];

    this.arena.exitPoints[0].x = this.arenaForm.value['exit-point-x'];
    this.arena.exitPoints[0].y = this.arenaForm.value['exit-point-y'];
    this.arena.exitPoints[0].z = this.arenaForm.value['exit-point-z'];
  }

}
