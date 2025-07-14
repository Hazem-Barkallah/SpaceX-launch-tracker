import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetails } from './launch-details';

describe('LaunchDetails', () => {
  let component: LaunchDetails;
  let fixture: ComponentFixture<LaunchDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
