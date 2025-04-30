console.log("probando");

// console.log(document)

// EJEMPLO FINAL DE LA CLASE. donde el usuario puede clickar el titulo para cambiar su texto.
document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").innerText =
    "Has clickado el boton y modificado el DOM!";
});

//* SELECTORES

//* QuerySelector es un metodo que nos permite buscar nodos dentro de otro nodo

const h2Node = document.querySelector("h2"); // me retorna el Nodo
console.log(h2Node);

const segundoH2Node = document.querySelector("#segundo-sub-titulo");
console.log(segundoH2Node);

console.log(segundoH2Node.innerText);
console.log(segundoH2Node.innerHTML);
console.log(segundoH2Node.id);
console.log(segundoH2Node.className);

const parrafoNodeList = document.querySelectorAll(".some-text")
console.log(parrafoNodeList)

//* que podemos hacer sobre listas de nodos que es similar a arrays

// - notación de corchete
console.log(parrafoNodeList[2])
// - bucles for
// - forEach
parrafoNodeList.forEach((eachParrafoNode) => {
  console.log(eachParrafoNode.innerText)
})
// - no podemos hacer más nada :(  push, shift, slice, splice, map, filter...

//* Busquedas anidadas

const cardNodeList = document.querySelectorAll(".card")
// console.log(cardNodeList)
cardNodeList.forEach((eachCardNode) => {
  console.log(eachCardNode)
  // const h3Node = document.querySelector("h3") // EN TODO el documento, busca el primer h3 que consigas
  const h3Node = eachCardNode.querySelector("h3")
  console.log(h3Node)
})


//* EVENTOS

//* MANIPULACION DEL DOM
