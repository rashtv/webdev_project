import { TestBed } from '@angular/core/testing';

import { VodkaService } from './vodka.service';

describe('VodkaService', () => {
  let service: VodkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VodkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
