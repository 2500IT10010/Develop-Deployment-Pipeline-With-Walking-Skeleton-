function login(username, password) {
  return username === 'admin' && password === '123';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const result = login(username, password);
  document.getElementById('result').textContent = result ? 'Login successful!' : 'Login failed!';
});

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = login;
}
