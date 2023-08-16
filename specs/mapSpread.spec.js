import { expect } from 'chai';

import {
  getAppliedFilters as getObject,
  getSortedAppliedFilters as getSortObject,
} from '../components/collections/mapSpread/object.js';

import {
  getAppliedFilters as getIterate,
  getSortedAppliedFilters as getSortIterate,
} from '../components/collections/mapSpread/iterate.js';

import {
  getAppliedFilters,
  getSortedAppliedFilters,
} from '../components/collections/mapSpread/mapSpread.js';

describe('object get', () => {
  it('should get key-values from object', () => {
    const filters = {
      color: 'black',
      breed: 'labrador',
    };
    expect(getObject(filters)).equal('Your filters are: color:black, breed:labrador.');
  });

  it('should get sorted key-values from object', () => {
    const filters = {
      color: 'black',
      breed: 'labrador',
    };
    expect(getSortObject(filters)).equal('Your filters are: breed:labrador, color:black.');
  });
});

describe('map iterate', () => {
  it('should get key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getIterate(filters)).equal('Your filters are: color:black, breed:labrador.');
  });

  it('should get sorted key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getSortIterate(filters)).equal('Your filters are: breed:labrador, color:black.');
  });
});

describe('map spread', () => {
  it('should get key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getAppliedFilters(filters)).equal('Your filters are: color:black, breed:labrador.');
  });

  it('should get sorted key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getSortedAppliedFilters(filters)).equal('Your filters are: breed:labrador, color:black.');
  });
});
