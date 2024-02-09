document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".btn.btn-primary");
    const clearButton = document.querySelector(".btn.btn-light");
    const itemList = document.getElementById("my-list");
    const template = document.getElementById("list-template");
    const modalBody = document.getElementById("modalBody");
    let characters = []; // Almacenar los personajes cargados

    // Función para agregar un personaje a la lista
    function addCharacter(character) {
        const clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = character.id;
        clone.querySelector("[data-id='title']").textContent = character.name;
        clone.querySelector("[data-id='content']").textContent = character.species;
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        img.classList.add("character-image"); // Agregar una clase al elemento de imagen
        clone.querySelector("[data-id='content']").appendChild(img);
        itemList.appendChild(clone);

        // Agregar evento clic para mostrar los detalles del personaje en el modal
        img.addEventListener("click", () => {
            modalBody.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="modal-character-image">
                <p><strong>Name:</strong> ${character.name}</p>
                <p><strong>Species:</strong> ${character.species}</p>
                <p><strong>Status:</strong> ${character.status}</p>
                <p><strong>Origin:</strong> ${character.origin.name}</p>
            `;
            $('#characterModal').modal('show'); // Mostrar el modal
        });
    }

    // Función para cargar los personajes desde la API
    async function loadCharacters() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            characters = data.results; // Almacenar los personajes en la variable characters
        } catch (error) {
            console.error("Error al cargar los personajes:", error);
        }
    }

    // Evento para agregar un personaje al hacer clic en el botón "Add item"
    addButton.addEventListener("click", () => {
        characters.forEach(character => {
            addCharacter(character);
        });
    });

    // Evento para limpiar la lista al hacer clic en el botón "Clear all"
    clearButton.addEventListener("click", () => {
        itemList.innerHTML = "";
    });

    // Cargar los personajes al cargar la página
    loadCharacters();
});
