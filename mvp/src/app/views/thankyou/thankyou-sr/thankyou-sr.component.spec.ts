import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouSrComponent } from './thankyou-sr.component';

describe('ThankyouSrComponent', () => {
  let component: ThankyouSrComponent;
  let fixture: ComponentFixture<ThankyouSrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouSrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouSrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
