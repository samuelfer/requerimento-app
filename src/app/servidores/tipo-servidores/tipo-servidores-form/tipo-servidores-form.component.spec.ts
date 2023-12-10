import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServidorFormComponent } from './tipo-servidores-form.component';

describe('TipoServidorFormComponent', () => {
  let component: TipoServidorFormComponent;
  let fixture: ComponentFixture<TipoServidorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoServidorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServidorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
