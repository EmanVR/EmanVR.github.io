document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario y agregar un evento de escucha al envío
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de usuario y contraseña
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar si ambos campos están llenos
        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, complete ambos campos.');
        } else {
            // Si ambos campos están llenos, redirigir a la siguiente página (puedes cambiar 'nextPage.html')
            window.location.href = 'Principal.html';
        }
    });
});
