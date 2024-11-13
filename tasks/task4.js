"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
    .then(response=>{
      if (response.ok) {
        return `Користувач з ID ${id} був успішно видалений.`;
      } else {
        return `Не вдалося видалити користувача з ID ${id}.`;
      }
    })
    .catch(error=>{
      console.error('Помилка при видаленні користувача:', error);
      return 'Помилка при виконанні запиту.';
    });
}

console.log(deleteUser(1));

module.exports = deleteUser;
