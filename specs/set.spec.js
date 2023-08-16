import { expect } from 'chai';

import {
  getUnique as uniqueLoop,
} from '../components/collections/set/unique.js';

import {
  getUnique,
  getUniqueColors,
  getUniqueColorsReduce,
} from '../components/collections/set/set.js';

describe('set', () => {
  it('should get unique with a loop', () => {
    const colors = ['black', 'black', 'chocolate', 'yellow'];
    expect(uniqueLoop(colors)).to.deep.equal(['black', 'chocolate', 'yellow']);
  });

  it('should get unique with Set', () => {
    const colors = ['black', 'black', 'chocolate', 'yellow'];
    expect(getUnique(colors)).to.deep.equal(['black', 'chocolate', 'yellow']);
  });

  it('should get unique colors Set', () => {
    const dogs = [
      {
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black',
      },
      {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black',
      },
      {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
      },
    ];
    expect(getUniqueColors(dogs)).to.deep.equal(['black', 'chocolate']);
  });

  it('should get unique colors with Set and reducer', () => {
    const dogs = [
      {
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black',
      },
      {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black',
      },
      {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
      },
    ];
    expect(getUniqueColorsReduce(dogs)).to.deep.equal(['black', 'chocolate']);
  });
});
