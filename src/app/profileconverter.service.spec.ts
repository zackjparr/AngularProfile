import { TestBed } from '@angular/core/testing';

import { ProfileconverterService } from './profileconverter.service';

describe('ProfileconverterService', () => {
  let service: ProfileconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
