import { TestBed } from '@angular/core/testing';

import { TicketsResolverService } from './tickets-resolver.service';

describe('TicketsResolverService', () => {
  let service: TicketsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
