import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronomeListComponent } from './pronome-list.component';

describe('PronomeListComponent', () => {
  let component: PronomeListComponent;
  let fixture: ComponentFixture<PronomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronomeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
