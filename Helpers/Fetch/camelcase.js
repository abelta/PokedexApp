import camelcaseKeys from 'camelcase-keys';

const camelcase = response => (camelcaseKeys(response));

export default camelcase;
