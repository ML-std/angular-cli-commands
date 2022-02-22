import { TestBed } from '@angular/core/testing';

import { CommandLineLibService } from './command-line-lib.service';

describe('CommandLineLibService', () => {
  let service: CommandLineLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandLineLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
