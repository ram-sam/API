document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('message').textContent = 'Login successful!';
            document.getElementById('message').style.color = 'green';
            // Armazenar o token em localStorage ou cookie, e redirecionar para a página protegida
            localStorage.setItem('token', data.token);
            // Redirecionar para a página principal ou dashboard
            window.location.href = '/dashboard.html';
        } else {
            document.getElementById('message').textContent = data.msg || 'Login failed!';
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred';
        document.getElementById('message').style.color = 'red';
    }
});