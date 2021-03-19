import { TestBed } from '@angular/core/testing';

import { CopyService } from './copy.service';

describe('CopyService', () => {
  let service: CopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
