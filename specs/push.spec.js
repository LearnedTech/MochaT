import { expect } from 'chai';
import {
  cart,
  reward,
  summarizeCart,
  summarizeCartUpdated,
} from '../components/arrays/push/push.js';

describe('push', () => {
  it('should not return an error intitially', () => {
    const testCart = [...cart];
    const updated = [...cart, reward];
    expect(summarizeCart(testCart)).to.deep.equal({
      discounts: 1,
      items: 4,
      cart: updated,
    });
  });

  it('should return an error when rearranged', () => {
    const testCart = [...cart];
    expect(summarizeCartUpdated(testCart)).to.deep.equal({
      error: 'Can only have one discount',
    });
  });

  it('should not return an error with spread', () => {
    const testCart = [...cart];
    const updated = [...cart, reward];
    expect(summarizeCart(testCart)).to.deep.equal({
      discounts: 1,
      items: 4,
      cart: updated,
    });
  });
});
