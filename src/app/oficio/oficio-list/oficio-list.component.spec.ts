import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficioListComponent } from './oficio-list.component';

describe('OficioListComponent', () => {
  let component: OficioListComponent;
  let fixture: ComponentFixture<OficioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
