import { TestBed } from '@angular/core/testing';

import { CheckFormService } from './check-form-service.service';

describe('CheckFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service).toBeTruthy();
  });
});
