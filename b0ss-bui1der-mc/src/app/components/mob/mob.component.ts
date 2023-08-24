import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Boss } from 'src/app/models/boss.model';
import { BundleService } from 'src/app/services/bundle.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.css']
})
export class MobComponent implements AfterViewChecked {

  public mob: Boss;

  @ViewChild('f') mobForm!: NgForm;

  constructor(private headerSvc: HeaderService, private bundleSvc: BundleService) {
    this.mob = bundleSvc.bundle.boss;
  }

  ngAfterViewChecked(): void {
    this.headerSvc.title = 'Mob';
    this.headerSvc.subtitle = this.mob.name ? this.mob.name : 'new b0ss';
    this.headerSvc.backUrl = "bossview";
  }

  onSubmit() {
    this.mob.name = this.mobForm.value.name;
    this.mob.tag = this.mobForm.value.tag;
    this.mob.type = this.mobForm.value.type;
    this.mob.data = this.mobForm.value.data;
  }

  generateTag(name: string) {
    if(name) {
      this.mobForm.form.patchValue({
        tag: this.bundleSvc.createTag(name)
      });
    }
  }

}
