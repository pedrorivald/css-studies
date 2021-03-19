import { TestBed } from '@angular/core/testing';

import { BorderService } from './border.service';

describe('BorderService', () => {
  let service: BorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
