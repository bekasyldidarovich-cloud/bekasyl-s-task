document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const user = {
      name: name,
      email: email,
      password: password,
    };

    const usersText = localStorage.getItem("users");
    const users = usersText ? JSON.parse(usersText) : [];

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    const modalElement = document.getElementById("successModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const usersText = localStorage.getItem("users");
    const users = usersText ? JSON.parse(usersText) : [];

    const savedUser = users.find(function (u) {
      return u.email === email && u.password === password;
    });

    if (savedUser) {
      console.log("Успешный вход!");
    } else {
      console.log("Неверный email или пароль");
    }
  });

function renderUsersTable() {
  const usersText = localStorage.getItem("users");
  const users = usersText ? JSON.parse(usersText) : [];

  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
    `;

    tbody.appendChild(row);
  }
}

renderUsersTable();
