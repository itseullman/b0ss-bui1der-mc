import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Minion } from 'src/app/models/minion.model';
import { BundleService } from 'src/app/services/bundle.service';

@Component({
  selector: 'b0b1-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.css']
})
export class MinionComponent implements OnInit {

  public minion!: Minion;
  
  @ViewChild('f') minionForm!: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private bundleSvc: BundleService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.params['name'];
    this.minion = this.bundleSvc.getMinion(name)!;
    this.route.params.subscribe((params: Params) => {
      this.minion = this.bundleSvc.getMinion(params['name'])!;
    });
  }

  onSubmit() {
    this.minion.name = this.minionForm.value.name;
    this.minion.tag = this.minionForm.value.tag;
    this.minion.type = this.minionForm.value.type;
    this.minion.data = this.minionForm.value.data;
    this.minion.spawnTimer.seconds = this.minionForm.value.spawnTimer;
    this.minion.spawnCount = this.minionForm.value.spawnCap;
    this.router.navigate(['..', this.minion.name], {relativeTo: this.route});
  }

  fillTag() {
    this.minionForm.form.patchValue({tag: this.bundleSvc.createTag(this.minionForm.value.name)});
  }

}
