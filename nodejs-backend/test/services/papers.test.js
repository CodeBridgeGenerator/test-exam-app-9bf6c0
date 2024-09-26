const assert = require('assert');
const app = require('../../src/app');

describe('\'papers\' service', () => {
  it('registered the service', () => {
    const service = app.service('papers');

    assert.ok(service, 'Registered the service (papers)');
  });
});
