import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCardComponent } from './guest-card.component';

describe('GuestCardComponent', () => {
  let component: GuestCardComponent;
  let fixture: ComponentFixture<GuestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
