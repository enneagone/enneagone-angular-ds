import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIconButtonComponent } from './sicon-button.component';

describe('SIconButtonComponent', () => {
  let component: SIconButtonComponent;
  let fixture: ComponentFixture<SIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
