const createUser = require('../tasks/task2');

test('Correctly makes POST request and creates new user', async () => {
  const newUser = { name: 'John', email: 'john@example.com' };
  const data = await createUser(newUser);
  expect(data).toHaveProperty('id');
  expect(data.name).toBe(newUser.name);
  expect(data.email).toBe(newUser.email);
});
