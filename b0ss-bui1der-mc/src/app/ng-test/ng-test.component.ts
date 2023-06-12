import { Component, OnInit } from '@angular/core';
import { Minion } from './ng-test';

@Component({
  selector: 'b0b1-ng-test',
  templateUrl: './ng-test.component.html',
  styleUrls: ['./ng-test.component.css']
})
export class NgTestComponent implements OnInit {
  bossname = 'Boss';
  minionCount = 3;

  hideMinions = false;

  minion: Minion = {
    name: 'blah',
    maxCount: 5,
    createdDate: new Date(Date.now())
  };

  minions: Minion[] = [
    this.minion,
    this.minion,
    this.minion
  ]

  constructor() { }

  ngOnInit(): void {
    // data loaded from API should happen here.

  }

  toggle() {
    this.hideMinions = !this.hideMinions;
  }

  selectMinion(minion: Minion) {
    console.log(minion);
  }

  addMinion() {
    const minion: Minion = {
      name: 'new',
      maxCount: 10,
      createdDate: new Date(Date.now())
    }
    // immutability/onPush change detection demands that we return a new instance instead of mutating
    // this.minions.push(minion);
    this.minions = [...this.minions, minion];
  }

}
