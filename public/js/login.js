//handling the login form. retrieving the username an dpassword, then checks if its valid, it makes a post request and if the response is successful then it redirects to dashboard page with the posts, if not it alerts the user.
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify(
                {
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

//added event listener so once you hot login it triggers the login form hander function
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);