document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".btn.btn-primary");
    const clearButton = document.querySelector(".btn.btn-light");
    const itemList = document.getElementById("my-list");
    const template = document.getElementById("list-template");

    // Función para agregar un personaje a la lista
    function addCharacter(character) {
        const clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = character.id;
        clone.querySelector("[data-id='title']").textContent = character.name;
        clone.querySelector("[data-id='content']").textContent = character.species;
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        clone.querySelector("[data-id='content']").appendChild(img);
        itemList.appendChild(clone);
    }

    // Función para cargar un personaje aleatorio desde la API y agregarlo a la lista
    async function addRandomCharacter() {
        try {
            const randomId = Math.floor(Math.random() * 671) + 1; // Seleccionar un ID de personaje aleatorio (la API tiene 671 personajes)
            const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
            const character = await response.json();
            addCharacter(character);
        } catch (error) {
            console.error("Error al cargar el personaje:", error);
        }
    }

    // Evento para agregar un personaje al hacer clic en el botón "Add item"
    addButton.addEventListener("click", addRandomCharacter);

    // Evento para limpiar la lista al hacer clic en el botón "Clear all"
    clearButton.addEventListener("click", () => {
        itemList.innerHTML = "";
    });
});
