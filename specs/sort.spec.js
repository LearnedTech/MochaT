import { expect } from 'chai';
import { staff, sortByYears, sortByName } from '../components/arrays/sorts/sort.js';

describe('sort mutations', () => {
  it('should return different results', () => {
    const copy = [...staff];
    copy.sort(sortByYears);
    expect(copy[0].name).equal('Theo');
    expect(copy[1].name).equal('Joe');
    expect(copy[2].name).equal('Dyan');

    copy.sort(sortByName);
    expect(copy[0].name).equal('Dyan');
    expect(copy[1].name).equal('Joe');
    expect(copy[2].name).equal('Theo');
  });

  it('should return the same results', () => {
    const staff1 = [...staff].sort(sortByYears);
    expect(staff1[0].name).equal('Theo');
    expect(staff1[1].name).equal('Joe');
    expect(staff1[2].name).equal('Dyan');

    const staff2 = [...staff].sort(sortByName);
    expect(staff2[0].name).equal('Dyan');
    expect(staff2[1].name).equal('Joe');
    expect(staff2[2].name).equal('Theo');

    const staff3 = [...staff].sort(sortByYears);
    expect(staff3[0].name).equal('Theo');
    expect(staff3[1].name).equal('Joe');
    expect(staff3[2].name).equal('Dyan');
  });
});
