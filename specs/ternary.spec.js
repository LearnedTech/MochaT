import {expect} from 'chai';

import {
  configureTimePermissions as configureLet,
  configureTimePermissionsScope as configureLetScope,
} from '../components/conditionals/ternary/if.js';
import { configureTimePermissions as configureProblem } from '../components/conditionals/ternary/ternaryProblem.js';

describe('ternary ', () => {
  it('should not set time permissions with if and let', () => {
    let RefError;
    try {
      configureLet({ title: 'manager' });
    } catch (error) {
      RefError = error instanceof ReferenceError;
    }
    expect(RefError).equal(true);
  });

  it('should set time permissions with if and let', () => {
    expect(configureLetScope({ title: 'manager' })).to.deep.equal(['time', 'pay']);
  });

  it('should set manager, supervisor, employee with ternary', () => {
    expect(configureProblem({ title: 'manager' })).to.deep.equal(['time', 'overtimeAuthorization', 'pay']);
    expect(configureProblem({ title: 'supervisor' })).to.deep.equal(['time', 'overtimeAuthorization']);
    expect(configureProblem({ title: 'employee' })).to.deep.equal(['time']);
  });
});
