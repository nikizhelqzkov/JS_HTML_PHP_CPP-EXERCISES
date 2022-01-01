function regEvent(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  fetch("/api/users/registration", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(console.log);
}

function login(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  fetch("/api/users/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(() => {
    window.location.replace("http://localhost:8000/users.html");
  });
}

function loadUsers() {
  fetch("/api/users/getUsers", {
    headers: {
      "content-type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((users) => {
      const ul = document.createElement("ul");
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.email;
        ul.appendChild(li);
      });
      const u = document.getElementById("users");
      u.appendChild(ul);
    });
}
