import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoListComponent } from './requerimento-list.component';

describe('RequerimentoListComponent', () => {
  let component: RequerimentoListComponent;
  let fixture: ComponentFixture<RequerimentoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimentoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
