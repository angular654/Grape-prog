import { TestBed } from '@angular/core/testing';

import { CheckFormServiceService } from './check-form-service.service';

describe('CheckFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckFormServiceService = TestBed.get(CheckFormServiceService);
    expect(service).toBeTruthy();
  });
});
