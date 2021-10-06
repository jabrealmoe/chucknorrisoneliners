import { TestBed } from '@angular/core/testing';

import { OnelinerService } from './oneliner.service';

describe('OnelinerService', () => {
  let service: OnelinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnelinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
