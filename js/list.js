document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".btn.btn-primary");
    const clearButton = document.querySelector(".btn.btn-light");
    const itemList = document.getElementById("my-list");
    const template = document.getElementById("list-template");
    const modalBody = document.getElementById("modalBody");
    let characters = [];


    function addCharacter(character) {
        const clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = character.id;
        clone.querySelector("[data-id='title']").textContent = character.name;
        clone.querySelector("[data-id='content']").textContent = character.species;
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        img.classList.add("character-image"); 
        clone.querySelector("[data-id='content']").appendChild(img);
        itemList.appendChild(clone);


        img.addEventListener("click", () => {
            modalBody.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="modal-character-image">
                <p><strong>Name:</strong> ${character.name}</p>
                <p><strong>Species:</strong> ${character.species}</p>
                <p><strong>Status:</strong> ${character.status}</p>
                <p><strong>Origin:</strong> ${character.origin.name}</p>
            `;
            $('#characterModal').modal('show');
        });
    }


    async function loadCharacters() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            characters = data.results;
        } catch (error) {
            console.error("Error al cargar los personajes:", error);
        }
    }


    addButton.addEventListener("click", () => {
        characters.forEach(character => {
            addCharacter(character);
        });
    });


    clearButton.addEventListener("click", () => {
        itemList.innerHTML = "";
    });


    loadCharacters();
});
