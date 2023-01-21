import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoxDocumentosComponent } from './card-box-documentos.component';

describe('CardBoxDocumentosComponent', () => {
  let component: CardBoxDocumentosComponent;
  let fixture: ComponentFixture<CardBoxDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBoxDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoxDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
