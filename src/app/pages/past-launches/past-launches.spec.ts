import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLaunches } from './past-launches';

describe('PastLaunches', () => {
  let component: PastLaunches;
  let fixture: ComponentFixture<PastLaunches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastLaunches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastLaunches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
