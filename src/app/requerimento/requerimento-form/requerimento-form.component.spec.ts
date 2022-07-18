import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoFormComponent } from './requerimento-form.component';

describe('RequerimentoFormComponent', () => {
  let component: RequerimentoFormComponent;
  let fixture: ComponentFixture<RequerimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimentoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
