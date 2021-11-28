import AddCommaToNumber from './add-comma-to-number';

describe('AddCommaToNumber', () => {
  describe('AddCommaToNumber with JS default function', () => {
    test('1000 should return 1,000', () => {
      expect(AddCommaToNumber.addCommaToNumberViaDefaultFunction(1000)).toEqual('1,000');
    });
  });
});
