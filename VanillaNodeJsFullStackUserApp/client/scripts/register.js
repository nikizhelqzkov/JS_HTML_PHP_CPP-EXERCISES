//validate user registr input and send it to the server
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const form = document.querySelector("form");
//client validation on on input fields

// I want on out of focus to show the error message for input fields
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

username.addEventListener("blur", () => {
  if (!username.value || username.value.length < 3) {
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
    const errorElement = document.createElement("div");
    errorElement.innerHTML =
      "Username is required with minimum length of 3 characters";
    errorElement.style.color = "red";
    errorElement.classList.add("error");
    username.after(errorElement);
  } else {
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
  }
});

email.addEventListener("blur", () => {
  if (!email.value || !validateEmail(email.value)) {
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
    const errorElement = document.createElement("div");
    errorElement.innerHTML = "Invalid email";
    errorElement.style.color = "red";
    errorElement.classList.add("error");
    email.after(errorElement);
  } else {
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
  }
});

password.addEventListener("blur", () => {
  if (!password.value || password.value.length < 6) {
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
    const errorElement = document.createElement("div");
    errorElement.innerHTML =
      "Password is required and should be at least 6 characters long";
    errorElement.style.color = "red";
    errorElement.classList.add("error");
    password.after(errorElement);
  } else {
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const body = { username, email, password };
  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const { error } = await res.json();
      // get the error message from the server and place it like html ahead of the form
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      if (document.querySelector(".success")) {
        document.querySelector(".success").remove();
      }

      const errorElement = document.createElement("div");
      errorElement.innerHTML = error;
      errorElement.style.color = "red";
      errorElement.classList.add("error");
      form.before(errorElement);
      return;
    }
    // add success message to the form

    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
    const successElement = document.createElement("div");
    successElement.style.color = "green";
    successElement.classList.add("success");
    successElement.innerHTML = "User created successfully!";
    form.before(successElement);

    username.value = "";
    email.value = "";
    password.value = "";
  } catch (err) {
    alert(err);
  }
});
