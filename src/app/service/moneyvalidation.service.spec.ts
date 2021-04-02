import { TestBed } from '@angular/core/testing';

import { MoneyvalidationService } from './moneyvalidation.service';

describe('MoneyvalidationService', () => {
  let service: MoneyvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
