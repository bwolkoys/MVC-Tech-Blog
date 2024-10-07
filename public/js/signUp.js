//taken from module 14 student activity 28 (login.js)
//submission form sign up. retrieves the username an dpassword input fields and uses document.queryselector to select them by their IDs. then it checks if the username and password are valid (filled in), if so a post request is sent and for the respionse it's either successful or an alert pops up

 //triggers the sign up form handler
 document
 .querySelector('.signup-form')
 .addEventListener('submit', signupFormHandler);

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  //triggers the sign up form handler
  //document
   // .querySelector('.signup-form')
    //.addEventListener('submit', signupFormHandler);
  