import {expect} from 'chai';

import {
  discounter as discountProblem,
  getFullName as fullProblem,
  getName as nameProblem,
  name,
} from '../components/functions/arrow/problem.js';

import {
  comic,
  discounter,
  getFullName,
  getName,
  getNameAndLocation,
} from '../components/functions/arrow/arrow.js';

describe('problems', () => {
  it('should get a name', () => {
    expect(nameProblem(name)).equal('Lemmy Kilmister');
  });

  it('should return an object', () => {
    expect(fullProblem(name)).to.deep.equal({ fullName: 'Lemmy Kilmister' });
  });

  it('should return a high order function', () => {
    expect(discountProblem(0.1)(100)).equal(90);
  });
});

describe('arrow functions', () => {
  it('should destructure inputs', () => {
    expect(getName(comic)).equal('Peter Bagge');
  });

  it('should return an object', () => {
    expect(getFullName(comic)).to.deep.equal({ fullName: 'Peter Bagge' });
  });

  it('should return an object', () => {
    expect(getNameAndLocation(comic)).to.deep.equal({
      fullName: 'Peter Bagge',
      location: 'Seattle, Washington',
    });
  });

  it('should return a high order function', () => {
    expect(discounter(0.1)(100)).equal(90);
  });
});
