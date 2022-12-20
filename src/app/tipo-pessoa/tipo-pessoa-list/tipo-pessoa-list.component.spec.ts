import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPessoaListComponent } from './tipo-pessoa-list.component';

describe('TipoPessoaListComponent', () => {
  let component: TipoPessoaListComponent;
  let fixture: ComponentFixture<TipoPessoaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPessoaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
