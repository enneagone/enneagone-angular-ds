import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E9BtnComponent } from './e9-btn.component';

describe('E9BtnComponent', () => {
  let component: E9BtnComponent;
  let fixture: ComponentFixture<E9BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E9BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E9BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
