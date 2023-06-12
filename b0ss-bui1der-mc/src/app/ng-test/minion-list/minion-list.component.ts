import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Minion } from '../ng-test';

@Component({
  selector: 'b0b1-minion-list',
  templateUrl: './minion-list.component.html',
  styleUrls: ['./minion-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // component should not change data iternally, should come from parent component
})
export class MinionListComponent implements OnChanges, DoCheck {

  ngDoCheck(): void {
    // called like onChanges, but for any event in entire application
    // dont implement onChanges and DoCheck on same component, just doubles up
  }

  // can only be implemented by component/directive with an @input property
  ngOnChanges(changes: SimpleChanges): void {
    // first changes occur when component is init'ed
    console.log(changes);
    // checking what has changed
    if (changes['minions']) {
      //operations
      // changes['minions'].currentValue
    }
  }

  @Input() minions: Minion[] = [];

  @Output() minionSelected = new EventEmitter<Minion>();

  selectMinion(minion: Minion) {
    this.minionSelected.emit(minion);
  }

}
