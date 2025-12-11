import navbar from '../components/navbar.js';
import footer from '../components/footer.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };

    let userList = JSON.parse(localStorage.getItem('users')) || [];
    
    userList.push(user);

    localStorage.setItem('users', JSON.stringify(userList));

    alert('Signup Successful! Please Login.');
    window.location.href = 'login.html';
});
