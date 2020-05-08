import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewButtonComponent } from './overview-button.component';

describe('OverviewButtonComponent', () => {
  let component: OverviewButtonComponent;
  let fixture: ComponentFixture<OverviewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
