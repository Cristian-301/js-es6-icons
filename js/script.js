// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

$(document).ready(
  function(){

    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

    var icon_container = $("#icon-container");

    print(icons, icon_container);


// milestone 2:
// definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.

    const colors = ["salmon", "cyan", "navy"];
    console.log(colors);

    const type = typeColor(icons)
    console.log(type);

  }
);


//---------------------------------
function print(array, container) {
  container.html("");
  array.forEach(
    (element) => {

      const {family, prefix, name} = element;

      container.append(`
        <div class="icons">
          <i class="${family} ${prefix}${name}"></i>
          <h2>${name.toUpperCase()}</h2>
        </div>
        `)
    }
  );


};

function typeColor(array) {
  const filteredType = [];
  array.forEach(
    (element) => {
      if (filteredType.includes(element.type) == false) {
        filteredType.push(element.type);
      };
    }
  );
  // console.log(filteredType);
  return filteredType;

}
