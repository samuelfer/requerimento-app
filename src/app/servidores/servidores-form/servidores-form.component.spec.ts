import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresFormComponent } from './servidores-form.component';

describe('ServidoresFormComponent', () => {
  let component: ServidoresFormComponent;
  let fixture: ComponentFixture<ServidoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServidoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
