import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosFormComponent } from './cargos-form.component';

describe('CargosFormComponent', () => {
  let component: CargosFormComponent;
  let fixture: ComponentFixture<CargosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
