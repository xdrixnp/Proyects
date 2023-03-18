const formulario = document.querySelector(".form");
const body = document.querySelector("body")
let fragmento = document.createDocumentFragment();
    
function changehidden (numero) {
    document.querySelector(".key-data").value = numero;
} 

for (let i = 1; i<=20; i++) {

    const item = document.createElement("img");
    item.setAttribute("src", "Objeto_Llave_negra.webp");
    item.setAttribute("class", "img")

    let numerorandomizado1 = Math.floor(Math.random()*1000)
    
    const modeloRandomizado = document.createElement("b");
    modeloRandomizado.innerHTML = `Modelo: ${numerorandomizado1}XT`;

    const modelo = document.createElement("p");
    modelo.setAttribute("class", `modelo${i} modelos`);
    modelo.innerHTML = modeloRandomizado.innerHTML;

    const nllave = document.createElement("p");
    nllave.setAttribute("class", "div-llave-num");
    nllave.innerHTML = `Llave ${i}`;

    const precio = document.createElement("p");
    precio.setAttribute("class", `precio`);
    precio.innerHTML = `Precio: <b>$${Math.floor(Math.random()*10 + 25)}</b>`;

    const div = document.createElement("div");
    div.addEventListener("click", ()=>{changehidden(`${numerorandomizado1}XT`)});
    div.tabIndex = i
    div.setAttribute("class", "form-div");
    div.appendChild(item);
    div.appendChild(nllave);
    div.appendChild(modelo);
    div.appendChild(precio);
    fragmento.appendChild(div);

}

const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "COMPRAR");
submit.setAttribute("class", "botonDeCompra");
submit.setAttribute("form", "form")
body.appendChild(submit);

formulario.appendChild(fragmento);