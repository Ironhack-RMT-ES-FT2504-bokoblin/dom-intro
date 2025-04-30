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

const thirdTitleNode = document.querySelector("#third-title")
// console.log(thirdTitleNode)

thirdTitleNode.addEventListener("mouseenter", () => {
  thirdTitleNode.innerText = "Cambiando el texto de el titulo"
})

thirdTitleNode.addEventListener("mouseleave", () => {
  thirdTitleNode.innerText = "Aprendiendo a manipular el DOM"
})

// counter

const addBtnNode = document.querySelector("#increment")
const spanNode = document.querySelector("#count h2 span")
addBtnNode.addEventListener("click", () => {
  spanNode.innerText++
})

//* MANIPULACION DEL DOM

//* borrar elementos del DOM

const deleteBtnNode = document.querySelector("#delete-btn")

deleteBtnNode.addEventListener("click", () => {

  // deleteBtnNode.remove() // NO DESTRUYE EL NODO. simplemente, lo remueve del DOM
  // thirdTitleNode.remove()

  // ejemplo de borrar todo el nodo de la pantalla. No muy correcto
  // document.querySelector("body").remove()

  // Mejor opción. limpiar el contenido de un nodo
  document.querySelector("body").innerHTML = ""

})


// funcionalidad donde el usuario agrega elementos a una lista
const inputNode = document.querySelector("#name")
const addToListBtnNode = document.querySelector("#add-form button")
const ulNode = document.querySelector("#add-list")

addToListBtnNode.addEventListener("click", () => {

  // ver que hay dentro del input
  let textoDelNuevoLi = inputNode.value

  // crear el elemento de li (con el texto del input)
  const liNode = document.createElement("li")
  liNode.innerText = textoDelNuevoLi
  console.log(liNode)

  // añadir ese li a la lista
  ulNode.append(liNode)

})


//* Cambiando ids y classes

const finalSectionNode = document.querySelector("#final-section")
finalSectionNode.addEventListener("click", () => {

  // finalSectionNode.id = "otro-id"

  // finalSectionNode.className = "container red-container"

  // classList => propiedad de nodos que me permite:
  // - agregar nuevas clases
  // - remover clases previas
  // - toggle 

  // finalSectionNode.classList.add("red-container")
  // finalSectionNode.classList.remove("blue-container")

  finalSectionNode.classList.toggle("red-container")
  finalSectionNode.classList.toggle("blue-container")

})

//* directamente podemos modificar los estilos de los nodos

const lastH2Node = document.querySelector("#last-h2")

lastH2Node.addEventListener("mouseenter", () => {

  // console.log(lastH2Node.style)
  lastH2Node.style.color = "red"
  lastH2Node.style.fontSize = "30px"
  lastH2Node.style.backgroundColor = "orange"
  lastH2Node.style.padding = "10px"
  lastH2Node.style.border = "solid 2px black"
  lastH2Node.style.borderRadius = "5px"
  
})