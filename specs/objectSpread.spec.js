import { expect } from 'chai';
import { addBookDefaults, deepMerge, updateBookYear, updateBookTitle } from '../components/collections/objectSpread/objectSpread.js';

describe('Spread tests', () => {
  it('should update book year', () => {
    const updated = {
      title: 'Reasons and Persons',
      author: 'Derek Parfit',
      year: 1984,
    };

    expect(updateBookYear()).to.deep.equal(updated);
  });

  it('should update book author', () => {
    const updated = {
      title: 'Reasons & Persons',
      author: 'Derek Parfit',
    };
    expect(updateBookTitle()).to.deep.equal(updated);
  });

  it('should add defaults', () => {
    const bookUpdated = addBookDefaults();
    expect(bookUpdated.title).equal('ES6 Tips');
    expect(bookUpdated.year).equal(2017);
  });

  it('should deep merge', () => {
    const [name1, name2] = deepMerge();
    expect(name1).not.equal(name2);
  });
});
