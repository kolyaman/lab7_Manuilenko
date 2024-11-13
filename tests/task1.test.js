const fetchUsers = require('../tasks/task1');

test('Correctly makes GET request and returns user data', async () => {
  const data = await fetchUsers();
  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('name');
});
