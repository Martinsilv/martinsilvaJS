
//  const account= {
//     nombre : "martin",
//     card : "411411411411",
//     amount : 1000,

//     retiro(quantity) {
//         this.amount= this.amount - (quantity)
//     }
//  }


// account.retiro(200)
// account.retiro(100)
// account.retiro(200)
// account.retiro(100)
// console.log(account)
 
//funcion flecha
//const numero = (num1, num2) =>  (num1 * num2)

//const resultado = numero(20, 2)
//console.log(resultado)

// const card = document.querySelector('.card')
// const cardImg = document.querySelector('.cardImg')
// const cardTitle = document.querySelector('.cardTitle')
// const price = document.querySelector('.price')


const contGrid = document.querySelector('.contGrid')
const tablaCarr = document.querySelector('.tablaCarr')
 
try{fetch('api.json')
.then(respuesta =>{
    return respuesta.json()
} )
.then( datos => {
    let contador = 0;
while (datos.length > contador) {

let card = document.createElement('div')

let imgCont = document.createElement('div')
let img = document.createElement ('img')

let cardBody = document.createElement('div')

let title = document.createElement('h5')
let price = document.createElement('p')

let addCarr = document.createElement('button')


card.setAttribute('class','card')

imgCont.setAttribute('class','imgCont')
img.setAttribute('src',datos[contador].imagen)
img.setAttribute('alt', 'imagen de representacion')

cardBody.setAttribute('class','cardBody')

title.innerHTML = datos[contador].nombre;
price.innerHTML = datos[contador].precio + '$';

title.setAttribute('class','cardTitle')
price.setAttribute('class', 'price')

addCarr.setAttribute('class','btn btn-dark')
addCarr.setAttribute('value',contador)
addCarr.innerHTML = 'añadir al carrito'


card.appendChild(imgCont)
imgCont.appendChild(img)
card.appendChild(cardBody)
cardBody.appendChild(title)
cardBody.appendChild(price)
cardBody.appendChild(addCarr)

contGrid.appendChild(card)

 
addCarr.addEventListener('click', (e) => {

const tr = document.createElement('tr')
const tdUno = document.createElement('td')
const tdDos = document.createElement('td')


tdUno.innerHTML = datos[addCarr.value].nombre
tdDos.innerHTML = datos [addCarr.value].precio



   tr.appendChild(tdUno);
   tr.appendChild(tdDos);
   tablaCarr.appendChild(tr);

});

 
    contador++;
   
}

  
})
} catch (e) {
    console.log(e);
}











