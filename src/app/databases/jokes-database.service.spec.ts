import { TestBed } from '@angular/core/testing';

import { JokesDatabaseService } from './jokes-database.service';

describe('JokesDatabaseService', () => {
  let service: JokesDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
