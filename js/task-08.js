// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget; 

//   if (email.value === "" || password.value === "") {
//     window.alert("Please fill in all the fields!");
//   } else {
//     const formData = {
//       email: email.value,
//       password: password.value
//     };

//     console.log(formData);
//     event.currentTarget.reset();
//   }
// }

/// wrzucone w funkcję 

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
 event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget; 

  
  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value
    };
 console.log(formData);
    event.currentTarget.reset();
  }
});