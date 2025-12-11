const displayTodos = (data, container) => {
    container.innerHTML = ""; 
    
    data.slice(0, 10).forEach(todo => {
        const div = document.createElement('div');
        div.className = 'todo-item';
        
        const statusClass = todo.completed ? 'completed' : 'pending';
        const statusText = todo.completed ? 'Completed' : 'Pending';

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p class="${statusClass}">Status: ${statusText}</p>
        `;
        
        container.appendChild(div);
    });
};

export default displayTodos;
