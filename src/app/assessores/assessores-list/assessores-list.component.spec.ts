import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessoresListComponent } from './assessores-list.component';

describe('AssessoresListComponent', () => {
  let component: AssessoresListComponent;
  let fixture: ComponentFixture<AssessoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessoresListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
