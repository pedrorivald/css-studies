import { TestBed } from '@angular/core/testing';

import { BorderImageService } from './border-image.service';

describe('BorderImageService', () => {
  let service: BorderImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
