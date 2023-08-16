import { expect } from 'chai';
import { addBookDefaults } from '../components/collections/assign/problem.js';

describe('Assign tests', () => {
  const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
  };

  const book = {
    title: 'Simplifying JavaScript',
    author: 'Joe Morgan',
  };

  it('should add defaults', () => {
    const bookUpdated = addBookDefaults(book, defaults);
    expect(bookUpdated.title).equal('Simplifying JavaScript');
    expect(bookUpdated.year).equal(2017);
  });

  it('should add defaults with assign', () => {
    const copy = Object.assign({}, defaults);
    const book2 = {
      title: 'Another book',
      year: 2016,
    };
    const bookUpdated = Object.assign(copy, book);
    expect(bookUpdated.title).equal('Simplifying JavaScript');
    expect(bookUpdated.author).equal('Joe Morgan');
    expect(bookUpdated.year).equal(2017);
    const bookUpdated2 = Object.assign(copy, book2);
    expect(bookUpdated2.title).equal('Another book');
    expect(bookUpdated2.author).equal('Joe Morgan');
    expect(bookUpdated2.year).equal(2016);
  });

  it('should add defaults with assign', () => {
    const bookUpdated = Object.assign({}, defaults, book);
    expect(bookUpdated.title).equal('Simplifying JavaScript');
    expect(bookUpdated.year).equal(2017);
  });
});
