const app = require('../../src/app');

describe('\'job\' service', () => {
  it('registered the service', () => {
    const service = app.service('job');
    expect(service).toBeTruthy();
  });
});
