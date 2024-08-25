document.addEventListener("DOMContentLoaded", function () {
    //Work experience section
  const section = document.querySelector(".work-experience");
  fetch("../workEperience.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        //Crea el article
        const article = document.createElement("article");

        //Crea el h3 y le agrega los atributos
        const h3 = document.createElement("h3");
        h3.textContent = data[i].company;
        h3.className = "company";

        //Crea las fecha de trabajo
        const p = document.createElement("p");
        p.textContent = data[i].dates;
        p.className = "dates";

        //Crea position
        const p2 = document.createElement("p");
        p2.textContent = data[i].position;
        p2.className = "position";

        //Le agrega los elementos al article
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        //Crea position y lee el json
        for (let j = 0; j < data[i].tasks.length; j++) {
          const p3 = document.createElement("p");
          p3.textContent = data[i].tasks[j].description;
          p3.className = "tasks";
          article.appendChild(p3);
        }

        //Le agrega el article al section
        section.appendChild(article);
      }
    })
    .catch((error) => console.error(error));

  //My work section
  const section2 = document.querySelector(".my-work");
  fetch("../myWork.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        //Crea el article
        const article = document.createElement("article");
        //Crea la img y le agrega los atributos
        const img = document.createElement("img");
        img.src = "public/img/" + data[i].picture;
        img.className = "work-image";

        //Le agrego el epigrafe
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = data[i].description;
        figcaption.className = "epigrafe";

        article.appendChild(img);
        article.appendChild(figcaption);
        section2.appendChild(article);
      }
    })
    .catch((error) => console.error(error));
});
