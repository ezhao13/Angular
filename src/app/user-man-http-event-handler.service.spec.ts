import { TestBed } from '@angular/core/testing';

import { UserManHttpEventHandlerService } from './user-man-http-event-handler.service';

describe('UserManHttpEventHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserManHttpEventHandlerService = TestBed.get(UserManHttpEventHandlerService);
    expect(service).toBeTruthy();
  });
});
