import { TestBed } from '@angular/core/testing';

import { EnneagoneAngularDsService } from './enneagone-angular-ds.service';

describe('EnneagoneAngularDsService', () => {
  let service: EnneagoneAngularDsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnneagoneAngularDsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
