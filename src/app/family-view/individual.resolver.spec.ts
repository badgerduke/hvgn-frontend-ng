import { TestBed } from '@angular/core/testing';

import { IndividualResolver } from './individual.resolver';

describe('IndividualResolver', () => {
  let resolver: IndividualResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IndividualResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
