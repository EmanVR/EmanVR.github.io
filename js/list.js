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

    // Función para cargar los primeros personajes disponibles desde la API y agregarlos a la lista
    async function loadCharacters() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            data.results.forEach(character => {
                addCharacter(character);
            });
        } catch (error) {
            console.error("Error al cargar los personajes:", error);
        }
    }

    // Evento para agregar un personaje al hacer clic en el botón "Add item"
    addButton.addEventListener("click", loadCharacters);

    // Evento para limpiar la lista al hacer clic en el botón "Clear all"
    clearButton.addEventListener("click", () => {
        itemList.innerHTML = "";
    });

    // Cargar los primeros personajes disponibles al cargar la página
    loadCharacters();
});
