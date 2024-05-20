import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecardComponent } from './welcomecard.component';

describe('WelcomecardComponent', () => {
  let component: WelcomecardComponent;
  let fixture: ComponentFixture<WelcomecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
