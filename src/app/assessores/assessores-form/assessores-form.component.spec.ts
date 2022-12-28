import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessoresFormComponent } from './assessores-form.component';

describe('AssessoresFormComponent', () => {
  let component: AssessoresFormComponent;
  let fixture: ComponentFixture<AssessoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessoresFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
