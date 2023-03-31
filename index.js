// Add your code here
function submitData(name, email) {
  const url = "http://localhost:3000/users";
  const data = { name, email };
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, config)
    .then((response) => response.json())
    .then((json) => {
      const id = json.id;
      document.body.innerHTML += id;
    })
    .catch((error) => {
      document.body.innerHTML += error.message;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("user-form");
  userForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    submitData(name, email);
  });
});
