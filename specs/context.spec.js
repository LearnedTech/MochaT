import {expect} from 'chai';

import { validator } from '../components/functions/context/context.js';

import {
  validator as validatorBasic,
} from '../components/functions/context/basic.js';

import {
  validator as validatorProblem,
} from '../components/functions/context/problem.js';

import {
  validator as validatorMethod,
} from '../components/functions/context/method.js';


describe('validation', () => {
  const field = 'city';
  it('should set invalid message', () => {
    const message = 'city is invalid.';
    expect(validatorBasic.setInvalidMessage(field)).equal(message);
  });
  it('should not access context on map function', () => {
    try {
      // START: problem
      validatorProblem.setInvalidMessages(field);
      // TypeError: Cannot read property 'message' of undefined
      // END: problem
    } catch (e) {
      expect(e.message).to.deep.equal(['city undefined']);
    }
  });

  it('should access context with arrow function', () => {
    const messages = ['city is invalid.'];
    expect(validator.setInvalidMessages(field)).to.deep.equal(messages);
  });

  it('should not access context on map function', () => {
    try {
      // START: problemMethod
      validatorMethod.setInvalidMessage(field);
      // TypeError: Cannot read property 'message' of undefined
      // END: problemMethod
    } catch (e) {
      expect(e.message).equal("city undefined");
    }
  });
});
