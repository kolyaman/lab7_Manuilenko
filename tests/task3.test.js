const updateUser = require('../tasks/task3');

test('Correctly makes PATCH request and updates user data', async () => {
  const updatedData = { name: 'Updated Name' };
  const userId = 1;
  const data = await updateUser(userId, updatedData);
  expect(data.name).toBe(updatedData.name); // Перевіряємо, що ім’я оновлено
  expect(data.id).toBe(userId); // Перевіряємо, що id співпадає з переданим
});
