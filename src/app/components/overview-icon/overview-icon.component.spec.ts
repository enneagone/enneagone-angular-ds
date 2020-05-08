import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewIconComponent } from './overview-icon.component';

describe('OverviewIconComponent', () => {
  let component: OverviewIconComponent;
  let fixture: ComponentFixture<OverviewIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
