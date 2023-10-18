<form onsubmit="/photography.html">
      <input type="text" id="username" placeholder="Username">
      <input type="password" id="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  
    <script>
      function login() {
        // Get the username and password from the login form.
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Check if the username and password match the expected values.
        if (username === 'admin' && password === 'admin') {
          // Login to the home page.
          window.location.href = '/photography.html';
        } else {
          // Display an error message.
          alert('Invalid username or password.');
        }
  
        // Prevent the form from submitting.
        return false;
      }
    </script>