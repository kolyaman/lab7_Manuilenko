"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok){
      throw new Error('Помилка');
    }
    const users = await response.json();
    const userData = users.map(user => ({
      id: user.id,
      name: user.name
    }));
    return userData;
  }catch (error) {
    console.error('Помилка в операції fetch', error);
    return [];
  }
}
console.log(fetchUsers())

module.exports = fetchUsers;