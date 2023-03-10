import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
