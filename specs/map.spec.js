import { expect } from 'chai';
//Mocha
import {
  addFilters,
  clearFilters,
  deleteFilters,
} from '../components/collections/map/map.js';

import {
  addFilters as addFiltersObject,
  clearFilters as clearFiltersObject,
  deleteFilters as deleteFiltersObject,
} from '../components/collections/map/problem.js';

describe('Map tests', () => {
  it('should set value on object', () => {
    const filters = {
      color: 'brown',
    };
    addFiltersObject(filters, 'size', 'large');
    expect(filters.size).equal('large');
  });

  it('should delete the value on object', () => {
    const filters = {
      color: 'brown',
      size: 'large',
    };
    deleteFiltersObject(filters, 'color');
    expect(filters).to.deep.equal({ size: 'large' });
  });

  it('should clear the object', () => {
    let filters = {
      color: 'brown',
      size: 'large',
    };
    filters = clearFiltersObject(filters);
    expect(filters).to.deep.equal({});
  });

  it('should set value on object', () => {
    const filters = new Map().set('color', 'brown');
    addFilters(filters, 'size', 'large');
    expect(filters.get('size')).to.deep.equal('large');
  });

  it('should delete the value on object', () => {
    const filters = new Map()
      .set('color', 'brown')
      .set('size', 'large');
    deleteFilters(filters, 'color');
    expect([...filters.keys()]).to.deep.equal(['size']);
  });

  it('should clear the object', () => {
    const filters = new Map()
      .set('color', 'brown')
      .set('size', 'large');
    clearFilters(filters);
    expect([...filters.keys()]).to.deep.equal([]);
  });
});
