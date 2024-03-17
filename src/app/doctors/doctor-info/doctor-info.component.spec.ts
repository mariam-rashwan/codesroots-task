import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInfoComponent } from './doctor-info.component';
import { FullNamePipe } from '../../core/pipes/full-name.pipe';

describe('DoctorInfoComponent', () => {
  let component: DoctorInfoComponent;
  let fixture: ComponentFixture<DoctorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorInfoComponent, FullNamePipe],
      // imports:[FullNamePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorInfoComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
