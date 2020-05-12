import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingButtonComponent } from './sizing-button.component';

describe('SizingButtonComponent', () => {
  let component: SizingButtonComponent;
  let fixture: ComponentFixture<SizingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
