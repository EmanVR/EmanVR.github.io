<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            // Obtener los valores del formulario
            const usuario = form.querySelector('[name="usuario"]').value.trim();
            const contrasena = form.querySelector('[name="contrasena"]').value.trim();

            // Validar que los campos no estén vacíos
            if (usuario === '' || contrasena === '') {
                alert('Por favor, completa todos los campos.');
                event.preventDefault(); 
            }
        });
    });
