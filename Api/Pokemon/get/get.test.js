// import { expect } from 'chai';
// jest.enableAutomock();
// import sinon from 'sinon';
// import sinonStubPromise from 'sinon-stub-promise';
// jest.mock('../../../Helpers/Fetch/camelcase');
// const camelcase = require('../../../Helpers/Fetch/camelcase');
// jest.mock('camelcase');
// import { camelcase, checkStatus, parseJson } from '../../../Helpers/Fetch';
import * as helpers from '../../../Helpers/Fetch';
import get from '.';

// jest.spyOn(helpers, 'camelcase');

// console.log('CAMELCASE');
// console.log(camelcase);
// console.log(camelcase.mock.calls);

// sinonStubPromise(sinon);
// const a = new Response();
// const response = { json: () => ({}) };
// const fetchStub = sinon.stub(global, 'fetch').returnsPromise().resolves({});
// const camelcaseKeysSpy = sinon.spy(camelcaseKeys);
// sinon.spy(checkStatus);
// sinon.spy(parseJson);

describe.skip('get', () => {
  get('pikachu');

  // it('calls fetch', () => {
  //   expect(fetchStub.called).to.be.true;
  // });

  it('calls camelcaseKeys', () => {
    // expect(camelcaseKeysSpy.called).to.be.true;
    expect(helpers.camelcase).toBeCalled();
    // expect(camelcase.mock.calls.length).to.be.at.least(1);
    // expect(camelcase.called).to.be.true;
  });
});
