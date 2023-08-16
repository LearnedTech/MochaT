import { expect } from 'chai';

import {
  getDogNames as getNamesFull,
} from '../components/functions/curry/problem.js';

import {
  allFilters,
  anyFilters,
  dogs,
  getDogNames,
  colorCheck,
  stateCheck,
  weightCheck,
} from '../components/functions/curry/curry.js';

describe('curry', () => {
  it('should apply a function without currying', () => {
    expect(getNamesFull(dogs, ['color', 'black'])).to.deep.equal(['max', 'don']);
  });
  it('should get dog names with regular function', () => {
    expect(getDogNames(dogs, dog => dog.color === 'black')).to.deep.equal(['max', 'don']);
  });
  it('should get dog names with curried function', () => {
    expect(getDogNames(dogs, weightCheck(20))).to.deep.equal(['max']);
  });
  it('should get dog names with curried function', () => {
    expect(getDogNames(dogs, weightCheck(20))).to.deep.equal(['max']);
  });
  it('should apply multiple functions', () => {
    expect(allFilters(dogs, colorCheck('black'), stateCheck('kansas'))).to.deep.equal(['don']);
  });
  it('should apply multiple functions', () => {
    expect(allFilters(dogs, colorCheck('black'), stateCheck('kansas'))).to.deep.equal(['don']);
  });
  it('should apply multiple functions', () => {
    expect(anyFilters(dogs, weightCheck(20), colorCheck('chocolate'))).to.deep.equal(['max', 'shadow']);
  });
});
