import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneDiscussionComponent } from './get-one-discussion.component';

describe('GetOneDiscussionComponent', () => {
  let component: GetOneDiscussionComponent;
  let fixture: ComponentFixture<GetOneDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
