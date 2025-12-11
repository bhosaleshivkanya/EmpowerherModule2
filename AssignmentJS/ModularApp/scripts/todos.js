import navbar from '../components/navbar.js';
import footer from '../components/footer.js';
import displayTodos from './displayTodos.js'; 

const isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn !== 'true') {
    alert('You must login to view this page!');
    window.location.href = 'login.html';
} else {
    document.getElementById('navbar').innerHTML = navbar();
    document.getElementById('footer').innerHTML = footer();

    const container = document.getElementById('todo-container');
    
    async function fetchTodos() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos');
            let data = await res.json();
        
            displayTodos(data, container);
        } catch (error) {
            console.log("Error:", error);
            container.innerHTML = "Failed to load todos.";
        }
    }

    fetchTodos();
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    });
}
