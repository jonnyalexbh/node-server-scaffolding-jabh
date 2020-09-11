const controller = require('../../app/controllers/healthCheck');

describe('Controller healthCheck', () => {
  it('hello function is defined', () => {
    expect(typeof controller.hello).toBe('function');
  });

  it('should return true', () => {
    expect(controller.hello()).toBeTruthy();
    expect(controller.hello()).toEqual(true);
  });
});
