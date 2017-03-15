import { TestBed, inject } from '@angular/core/testing';

import { DailyExpenseEntryService } from './daily-expense-entry.service';

describe('DailyExpenseEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyExpenseEntryService]
    });
  });

  it('should ...', inject([DailyExpenseEntryService], (service: DailyExpenseEntryService) => {
    expect(service).toBeTruthy();
  }));
});
