import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeExperienceComponent } from './committee-experience.component';

describe('CommitteeExperienceComponent', () => {
  let component: CommitteeExperienceComponent;
  let fixture: ComponentFixture<CommitteeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteeExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
