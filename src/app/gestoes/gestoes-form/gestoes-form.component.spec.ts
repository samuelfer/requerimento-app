import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoesFormComponent } from './gestoes-form.component';

describe('GestoesFormComponent', () => {
  let component: GestoesFormComponent;
  let fixture: ComponentFixture<GestoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
