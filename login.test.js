const login = require('./login');

test('returns true for correct credentials', () => {
  expect(login('admin', '123')).toBe(true);
});

test('returns false for incorrect username', () => {
  expect(login('user', '123')).toBe(false);
});

test('returns false for incorrect password', () => {
  expect(login('admin', 'wrong')).toBe(false);
});

test('returns false for both incorrect', () => {
  expect(login('user', 'wrong')).toBe(false);
});
