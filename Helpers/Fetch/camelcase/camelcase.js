import camelcaseKeys from 'camelcase-keys';

const camelcase = response => (camelcaseKeys(response, { deep: true }));

export default camelcase;
