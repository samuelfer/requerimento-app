import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaInputComponent } from './senha-input.component';

describe('SenhaInputComponent', () => {
  let component: SenhaInputComponent;
  let fixture: ComponentFixture<SenhaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenhaInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SenhaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
