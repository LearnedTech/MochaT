import { expect } from 'chai';
import {
  displayShipping,
} from '../components/arrays/includes/includes.js';
import {
  displayShipping as displayShippingIndex,
} from '../components/arrays/includes/greater.js';

describe('includes actions', () => {
  it('should display shipping using index', () => {
    const sections = ['shipping', 'address'];
    expect(displayShippingIndex(sections)).equal(true);
  });

  it('should not display shipping using index', () => {
    const sections = ['contact', 'address'];
    expect(displayShippingIndex(sections)).equal(false);
  });

  it('should display shipping', () => {
    const sections = ['shipping', 'address'];
    expect(displayShipping(sections)).equal(true);
  });

  it('should not display shipping', () => {
    const sections = ['contact', 'address'];
    expect(displayShipping(sections)).equal(false);
  });
});
