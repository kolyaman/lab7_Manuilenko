const deleteUser = require('../tasks/task4');

test('Correctly makes DELETE request and removes user', async () => {
  const userId = 1;
  const response = await deleteUser(userId);
  expect(response.status).toBe(200);
});
