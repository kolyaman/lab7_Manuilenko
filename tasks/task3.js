"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function updateUser(id, updatedData) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then(response=>response.json())
    .then(data=>{
      return data;
    })
    .catch(error=>{
      console.error('Помилка при оновленні користувача:', error);
      return null;
    });
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
