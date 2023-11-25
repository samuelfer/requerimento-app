import { TestBed } from '@angular/core/testing';

import { GestoesService } from './gestoes.service';

describe('GestoesService', () => {
  let service: GestoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
