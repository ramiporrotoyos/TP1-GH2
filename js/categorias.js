// Obtener el parámetro de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Cargar las categorías dinámicamente desde la API
function cargarCategorias() {
    const url = `https://dummyjson.com/recipes/tags`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const container = document.querySelector(".categorias-container");
            let categoriasHTML = "";

            data.tags.forEach((categoria) => {
                categoriasHTML += `
                    <div class="categoria-item">
                        <a href="index.html?category=${categoria}" class="categoria-link">
                            <div class="categoria-text">${categoria}</div>
                        </a>
                    </div>
                `;
            });

            container.innerHTML = categoriasHTML;
        })
        .catch((error) => console.error("Error al cargar las categorías:", error));
}

// Cargar las recetas según la categoría seleccionada
function cargarRecetasPorCategoria(categoria) {
    const url = `https://dummyjson.com/recipes/tags/${categoria}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const container = document.querySelector(".recetas-container");
            let recetasHTML = "";

            data.forEach((receta) => {
                recetasHTML += `
                    <div class="receta-item">
                        <img src="${receta.image}" alt="${receta.title}" class="receta-image" />
                        <h3 class="receta-title">${receta.title}</h3>
                        <p class="receta-difficulty">Dificultad: ${receta.difficulty}</p>
                        <a href="detallereceta.html?id=${receta.id}" class="receta-link">Ver detalle</a>
                    </div>
                `;
            });

            container.innerHTML = recetasHTML;
        })
        .catch((error) => console.error("Error al cargar las recetas:", error));
}

// Decidir qué cargar en la página
document.addEventListener("DOMContentLoaded", () => {
    const categoria = getQueryParam("category");

    if (categoria) {
        document.querySelector(".categorias-container").style.display = "none";
        cargarRecetasPorCategoria(categoria);
    } else {
        document.querySelector(".recetas-container").style.display = "none";
        cargarCategorias();
    }
});

