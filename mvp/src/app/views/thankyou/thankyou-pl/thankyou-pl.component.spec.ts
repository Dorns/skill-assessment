import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouPlComponent } from './thankyou-pl.component';

describe('ThankyouPlComponent', () => {
  let component: ThankyouPlComponent;
  let fixture: ComponentFixture<ThankyouPlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouPlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
