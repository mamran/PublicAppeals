import { TestBed, inject } from '@angular/core/testing';

import { GlobalservicesService } from './globalservices.service';

describe('GlobalservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalservicesService]
    });
  });

  it('should be created', inject([GlobalservicesService], (service: GlobalservicesService) => {
    expect(service).toBeTruthy();
  }));
});
