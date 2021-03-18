import { TestBed } from '@angular/core/testing';

import { GradientService } from './gradient.service';

describe('GradientService', () => {
  let service: GradientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
