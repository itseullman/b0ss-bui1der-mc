import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobComponent } from './mob.component';

describe('MobComponent', () => {
  let component: MobComponent;
  let fixture: ComponentFixture<MobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
