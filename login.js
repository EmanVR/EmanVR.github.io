document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Tener en cuenta esta línea


        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
        } else {
  
            if (validatePassword(password)) {

                window.location.href = 'Principal.html';
                //alert('Ha ingresado a su cuenta con éxito.');
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
});
