// Add your code here
function submitData (userName, userEmail){
    const submitData = {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name : userName,
            email : userEmail
          }),
    };    

return fetch ("http://localhost:3000/users", submitData)
.then((response) => response.json())
    .then((data) => {
      // Append the new id to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // Append the error message to the DOM on failure
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}

// Usage
submitData("Kibich", "user@gmail.com");

