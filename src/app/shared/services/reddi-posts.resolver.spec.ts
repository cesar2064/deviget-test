import { TestBed, async, inject } from '@angular/core/testing';

import { ReddiPostsResolver } from './reddi-posts.resolver';

describe('ReddiPostsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReddiPostsResolver]
    });
  });

  it('should ...', inject([ReddiPostsResolver], (guard: ReddiPostsResolver) => {
    expect(guard).toBeTruthy();
  }));
});
