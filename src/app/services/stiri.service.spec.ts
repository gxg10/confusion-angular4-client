import { TestBed, inject } from '@angular/core/testing';

import { StiriService } from './stiri.service';

describe('StiriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StiriService]
    });
  });

  it('should be created', inject([StiriService], (service: StiriService) => {
    expect(service).toBeTruthy();
  }));
});
