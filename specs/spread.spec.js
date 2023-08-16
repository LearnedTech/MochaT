import { expect } from 'chai';
import { removeItem as removeItemProblem } from '../components/arrays/spread/problem.js';
import { removeItem as removeItemSlice } from '../components/arrays/spread/slice.js';
import { removeItem as removeItemSplice } from '../components/arrays/spread/splice.js';
import { book, formatBook, removeItem } from '../components/arrays/spread/spread.js';

describe('spread operator', () => {
  it('should remove an item with a loop', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemProblem(before, 'banana')).to.deep.equal(after);
  });

  it('should remove an item with slice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemSlice(before, 'banana')).to.deep.equal(after);
  });

  it('should remove an item with splice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemSplice(before, 'banana')).to.deep.equal(after);
  });

  it('should remove the first item with a loop', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItemProblem(before, 'apple')).to.deep.equal(after);
  });

  it('should remove the first item with slice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItemSlice(before, 'apple')).to.deep.equal(after);
  });

  it('should remove the first item with spread', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItem(before, 'apple')).to.deep.equal(after);
  });

  it('should splice multiple times', () => {
    const books = ['practical vim', 'moby dick', 'the dark tower'];
    removeItemSplice(books, 'moby dick');
    const novels = removeItemSplice(books, 'practical vim');
    expect(novels).to.deep.equal(['the dark tower']);
  });

  it('should format price with spread', () => {
    const values = Object.values(book);
    expect(formatBook(...values)).equal('Reasons and Persons by Derek Parfit $19.99');
    expect(formatBook(...Object.values(book))).to.deep.equal('Reasons and Persons by Derek Parfit $19.99');
  });

  it('should not modify with a loop', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemProblem(before, 'peach')).to.deep.equal(after);
  });

  it('should not modify with a slice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemSlice(before, 'peach')).to.deep.equal(after);
  });

  it('should not modify with a splice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemSplice(before, 'peach')).to.deep.equal(after);
  });

  it('should not modify with a spread', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItem(before, 'peach')).to.deep.equal(after);
  });
});
