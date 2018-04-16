import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouJrComponent } from './thankyou-jr.component';

describe('ThankyouJrComponent', () => {
  let component: ThankyouJrComponent;
  let fixture: ComponentFixture<ThankyouJrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouJrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouJrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
