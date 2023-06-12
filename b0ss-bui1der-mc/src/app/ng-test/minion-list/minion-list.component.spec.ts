import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionListComponent } from './minion-list.component';

describe('MinionListComponent', () => {
  let component: MinionListComponent;
  let fixture: ComponentFixture<MinionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
