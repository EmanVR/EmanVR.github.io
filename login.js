document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario y agregar un evento de escucha al envío
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de correo electrónico y contraseña
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verificar si el correo electrónico es válido
        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
        } else {
            // Verificar la validez de la contraseña
            if (validatePassword(password)) {

                window.location.href = 'Principal.html';
            } else {
                alert('La contraseña debe tener una mayúscula, un número, y tener entre 8 y 30 caracteres.');
            }
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Función para validar la contraseña
    function validatePassword(password) {

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,30}$/;
        return passwordRegex.test(password);
    }
});
