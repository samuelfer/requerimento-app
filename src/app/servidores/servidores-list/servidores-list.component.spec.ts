import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresListComponent } from './servidores-list.component';

describe('ServidoresListComponent', () => {
  let component: ServidoresListComponent;
  let fixture: ComponentFixture<ServidoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServidoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
