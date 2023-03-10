import * as fromCounter from './counter.actions';

describe('Counter Actions', () => {
  it('should return an action', () => {
    expect(fromCounter.binaryValueSuccess(null).type).toBe('[Counter API] success binary value');
  });
});
