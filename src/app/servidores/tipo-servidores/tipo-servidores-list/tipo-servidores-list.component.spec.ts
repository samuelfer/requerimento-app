import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServidorListComponent } from './tipo-servidores-list.component';

describe('TipoServidorListComponent', () => {
  let component: TipoServidorListComponent;
  let fixture: ComponentFixture<TipoServidorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoServidorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServidorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
