import expect from 'expect';

import { getTotal, mutableDiscount, discountable } from './const';

describe('discountable', () => {
  const cart = [
    {
      item: 'Book',
      discountAvailable: false,
    },
    {
      item: 'Magazine',
      discountAvailable: true,
    },
  ];

  it('01 should get total', () => {
    expect(getTotal()).toEqual('Your Order is 110');
  });
  it('02 should get mutable discount', () => {
    expect(mutableDiscount(cart).length).toEqual(1);
  });

  it('03 should get discount length', () => {
    expect(discountable(cart).length).toEqual(1);
  });
});
