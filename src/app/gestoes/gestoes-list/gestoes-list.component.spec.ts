import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoesListComponent } from './gestoes-list.component';

describe('GestoesListComponent', () => {
  let component: GestoesListComponent;
  let fixture: ComponentFixture<GestoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestoesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
