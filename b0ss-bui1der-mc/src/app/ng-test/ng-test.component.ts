import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Minion } from './ng-test';
import { HeaderComponent } from '../common/header/header.component';
import { MinionListComponent } from './minion-list/minion-list.component';
import { MinionsService } from './services/minions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'b0b1-ng-test',
  templateUrl: './ng-test.component.html',
  styleUrls: ['./ng-test.component.css']
})
export class NgTestComponent implements OnInit, AfterViewInit {
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
  ];

  // Always accesses first instance available on template. Must be a sub-template.
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // Static is always false with ViewChildren
  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;

  // rxjs observables
  // can give it a specific type like <string> but mostly used indirectly as with http
  stream = new Observable(observer => {
    // next = emit new data to subscribers
    observer.next('user1');
    observer.next('user2');
    
    // complete = finish the stream
    observer.complete();

    // error = handle errors
    observer.error('error');
  });

  // for things like endpoints, use a value provider. Also useful for local storage service
  // private so that they can not be accessed by template, anti-pattern
  constructor(private minionsService: MinionsService) { }
  // use @Self() decorator on service to ensure that service is provided HERE and not at root
  // @SkipSelf is self explainatory
  // Optional for logging services not needed or inclued in prod
  // Host to add seperate onstance fromglobal which this and all sub components will use

  ngAfterViewInit(): void {
    // After ALL views/components are initialized.
    // Now safe to access components that have async operations.
    this.headerComponent.title = "HEADER 1";
    this.headerComponents.last.title = "HEADER 2";
    // this.headerComponents.get(index);
    const componentRef = this.vcr.createComponent(MinionListComponent);
    componentRef.instance.minions.push({name: 'Hi', maxCount: 7, createdDate: new Date()});
    this.name.nativeElement.innerText = "Hello";

    console.log(this.headerComponent);
    console.log(this.headerComponents);
  }

  ngOnInit(): void {
    // data loaded from API should happen here.
    this.minions = this.minionsService.getMinions();

    // subscribing to observable
    this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe({
      next: (data) => console.log(data),
      complete: () => console.log('complete'),
      error: (e) => console.log(e)
    });
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
