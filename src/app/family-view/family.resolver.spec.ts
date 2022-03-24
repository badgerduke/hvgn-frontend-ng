import { TestBed } from '@angular/core/testing';

import { FamilyResolver } from './family.resolver';

describe('FamilyResolver', () => {
  let resolver: FamilyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FamilyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
