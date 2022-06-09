const elList = document.querySelector(".result__list");
for(let element of pokemons){
       // Create element
       const wrapperItems = document.createElement("li");
       const pokemonImg = document.createElement("img");
       const wrapperDiv = document.createElement("div");
       const pokemonName = document.createElement("h3");
       const pokemonType = document.createElement("h4");
       const heartIcon = document.createElement("img");
       const divBottom = document.createElement("div")
       const pokemonWeight = document.createElement("p");
       const pokemonHeight = document.createElement("p");
      
   
       // Set attribute
       wrapperItems.setAttribute("class", "card mb-3");
       wrapperItems.style.width = "320px";
       wrapperItems.style.borderRadius = "15px";
       wrapperDiv.style.borderTop = "2px solid black";
       wrapperDiv.style.paddingTop = "30px";
       wrapperDiv.style.paddingLeft = "20px";
       wrapperDiv.setAttribute ("class", "wrapper__div");
       pokemonImg.setAttribute("class", "card-img-top");
       pokemonImg.setAttribute("src", element.img);
       pokemonType.setAttribute("class", "pokemon__type")
       heartIcon.setAttribute("src", "./images/heart-logo.svg");
       heartIcon.setAttribute("class", "heart__icon")
       pokemonWeight.setAttribute("class", "pokemon-weight fw-bold fs-4");
       pokemonHeight.setAttribute("class", "pokemon-height fw-bold fs-4");
       divBottom.setAttribute("class", "div__bottom mt-4 pb-5");
    //    heartIcon.setAttribute("src", .)

       // text-content
       pokemonName.textContent = element.name;
       pokemonType.textContent = element.type;
       pokemonWeight.textContent = element.weight;
       pokemonHeight.textContent = element.height;
       
     
       
       
       // Append
       elList.appendChild(wrapperItems);
       wrapperItems.appendChild(pokemonImg);
       wrapperItems.appendChild(wrapperDiv);
       wrapperDiv.appendChild(pokemonName);
       wrapperItems.appendChild(pokemonType);
       wrapperDiv.appendChild(heartIcon);
       wrapperItems.appendChild(divBottom);
       divBottom.appendChild(pokemonHeight);
       divBottom.appendChild(pokemonWeight);

       

}