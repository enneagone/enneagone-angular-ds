import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierStoryBookComponent } from './notifier-story-book.component';

describe('NotifierStoryBookComponent', () => {
  let component: NotifierStoryBookComponent;
  let fixture: ComponentFixture<NotifierStoryBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierStoryBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierStoryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
