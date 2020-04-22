import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E9EmptyComponent } from './e9-empty.component';

describe('E9EmptyComponent', () => {
  let component: E9EmptyComponent;
  let fixture: ComponentFixture<E9EmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E9EmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E9EmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
