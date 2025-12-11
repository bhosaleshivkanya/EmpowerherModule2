import navbar from '../components/navbar.js';
import footer from '../components/footer.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let userList = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = userList.find(user => user.email === email && user.password === password);

    if (userFound) {
        alert('Login Successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'todos.html';
    } else {
        alert('Invalid Credentials');
    }
});
