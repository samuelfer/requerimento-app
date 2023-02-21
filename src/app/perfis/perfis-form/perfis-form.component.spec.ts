import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisFormComponent } from './perfis-form.component';

describe('PerfisFormComponent', () => {
  let component: PerfisFormComponent;
  let fixture: ComponentFixture<PerfisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
