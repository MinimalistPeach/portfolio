import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobexpComponent } from './jobexp.component';

describe('JobexpComponent', () => {
  let component: JobexpComponent;
  let fixture: ComponentFixture<JobexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobexpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
