import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDocumentoComponent } from './dashboard-documento.component';

describe('DashboardDocumentoComponent', () => {
  let component: DashboardDocumentoComponent;
  let fixture: ComponentFixture<DashboardDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
