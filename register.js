document.addEventListener('DOMContentLoaded', function () {

    const registerForm = document.querySelector('form');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // TOMAR EN CUENTA ESTA LÍNEA

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;

        if (!validateName(name)) {
            alert('El campo de nombre debe contener solo letras y tener entre 3 y 30 caracteres.');
            return; // Salir de la función si la validación falla
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
        } else {
            if (validatePassword(password)) {
                // Aquí iría el código para registrar al usuario en la base de datos
                alert('Registro exitoso.');
            } else {
                alert('La contraseña debe tener una mayúscula, un número, y tener entre 8 y 30 caracteres.');
            }
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,30}$/;
        return passwordRegex.test(password);
    }

    function validateName(name) {
        const nameRegex = /^[A-Za-z]{3,30}$/;
        return nameRegex.test(name);
    }
});
