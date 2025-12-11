function navbar() {
    return `
        <div style="background-color: #333; padding: 10px; color: white; display: flex; gap: 20px;">
            <a href="index.html" style="color: white; text-decoration: none;">Home</a>
            <a href="signup.html" style="color: white; text-decoration: none;">Signup</a>
            <a href="login.html" style="color: white; text-decoration: none;">Login</a>
            <a href="todos.html" style="color: white; text-decoration: none;">Todos (Protected)</a>
        </div>
    `;
}

export default navbar;
