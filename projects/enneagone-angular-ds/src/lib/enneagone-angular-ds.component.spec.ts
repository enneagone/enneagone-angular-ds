import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnneagoneAngularDsComponent } from './enneagone-angular-ds.component';

describe('EnneagoneAngularDsComponent', () => {
  let component: EnneagoneAngularDsComponent;
  let fixture: ComponentFixture<EnneagoneAngularDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnneagoneAngularDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnneagoneAngularDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
