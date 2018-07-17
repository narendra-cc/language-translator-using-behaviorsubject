import { TestBed, inject } from '@angular/core/testing';

import { LangTransServiceService } from './lang-trans-service.service';

describe('LangTransServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LangTransServiceService]
    });
  });

  it('should be created', inject([LangTransServiceService], (service: LangTransServiceService) => {
    expect(service).toBeTruthy();
  }));
});
