import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPessoaFormComponent } from './tipo-pessoa-form.component';

describe('TipoPessoaFormComponent', () => {
  let component: TipoPessoaFormComponent;
  let fixture: ComponentFixture<TipoPessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPessoaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
