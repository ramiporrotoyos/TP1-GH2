let url = 'https://dummyjson.com/recipes';

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        
        let arrayDeRecetas = data.recipes;

        
        let seccion = document.querySelector('.container-products');
        let allRecipesHTML = ""; 

     
        for (let i = 0; i < 10; i++) {
            allRecipesHTML += `<article class="product-card">
                                <div class="product-details">
                                    <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
                                    <p class="receta-name">${arrayDeRecetas[i].name}</p>
                                    <p>Difficulty: ${arrayDeRecetas[i].difficulty}</p>
                                </div>
                                <div class="product-actions">
                                    <a href="detallereceta.html?id=${arrayDeRecetas[i].id}">Detalle</a>
                                </div>
                              </article>`;
        }

        
        seccion.innerHTML = allRecipesHTML;

    })
    .catch(function(e){
        console.log("Error:", e);
    });
