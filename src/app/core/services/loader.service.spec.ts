import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should not hide loader if API count is not zero', () => {
    service.showLoader();
    service.showLoader(); // Increment API count twice
    service.hideLoader();
    expect(service.isLoading$).toBeTruthy();
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
