import { TestBed } from '@angular/core/testing';

import { PaddingService } from './padding.service';

describe('PaddingService', () => {
  let service: PaddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
