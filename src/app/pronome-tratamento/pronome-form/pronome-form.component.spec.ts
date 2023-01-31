import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronomeFormComponent } from './pronome-form.component';

describe('PronomeFormComponent', () => {
  let component: PronomeFormComponent;
  let fixture: ComponentFixture<PronomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
