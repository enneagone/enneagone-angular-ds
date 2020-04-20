import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E9Btn } from './e9-btn.component';

describe('E9Btn', () => {
  let component: E9Btn;
  let fixture: ComponentFixture<E9Btn>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E9Btn ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E9Btn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
