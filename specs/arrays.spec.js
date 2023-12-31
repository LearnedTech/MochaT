import { expect } from 'chai';
import {
  alphabetizeTeam,
  dogPair,
  getMusicians,
  getName,
  getTotalStats,
  staff,
  team,
} from '../components/arrays/arrays/arrays.js';

describe('array actions', () => {
  it('should alphabetize team', () => {
    expect(alphabetizeTeam(team)).to.deep.equal([
      'Bea',
      'Dyan',
      'Joe',
      'Theo',
    ]);
  });

  it('should get musicians', () => {
    expect(getMusicians(staff)).to.deep.equal([
      {
        name: 'Wesley',
        position: 'musician',
      },
    ]);
  });

  it('should get name', () => {
    expect(getName(dogPair)).equal('Don');
  });

  it('should calculate stats', () => {
    expect(getTotalStats()).to.deep.equal({
      hits: 5,
      runs: 1,
      errors: 1,
    });
  });
});
