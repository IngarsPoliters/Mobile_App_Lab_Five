import { TestBed } from '@angular/core/testing';

import { Lab5ServiceService } from './lab5-service.service';

describe('Lab5ServiceService', () => {
  let service: Lab5ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lab5ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
