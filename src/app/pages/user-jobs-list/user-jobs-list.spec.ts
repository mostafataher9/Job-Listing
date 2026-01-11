import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJobsList } from './user-jobs-list';

describe('UserJobsList', () => {
  let component: UserJobsList;
  let fixture: ComponentFixture<UserJobsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserJobsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserJobsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
