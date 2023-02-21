import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisListComponent } from './perfis-list.component';

describe('PerfisListComponent', () => {
  let component: PerfisListComponent;
  let fixture: ComponentFixture<PerfisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
