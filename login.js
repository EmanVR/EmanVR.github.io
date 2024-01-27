document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de correo electrónico y contraseña
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verificar si el correo electrónico es válido y la contraseña tiene al menos 8 caracteres
        if (!validateEmail(email) || password.length < 8) {
            alert('Por favor, ingrese un correo electrónico válido y una contraseña de al menos 8 caracteres.');
        } else {

            window.location.href = 'Principal.html';
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

