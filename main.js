let primerParcial = prompt("ingresa la nota de tu primer parcial")
let segundoParcial = prompt("ingresa la nota de tu segundo parcial")
let tercerParcial = prompt("ingresa la nota de tu tercer parcial")

function calculaNotas  (primerParcial, segundoParcial, tercerParcial){

return (primerParcial + segundoParcial + tercerParcial)/3
}

let promedioNotas = calculaNotas(primerParcial, segundoParcial, tercerParcial);

if(promedioNotas >= 7){
    alert("Tu nota final es:" + promedioNotas + "felicitaciones! Aprobaste c:")

}

else if ((promedioNotas >= 4) && (promedioNotas < 7)){
    alert("Tu nota funal es:" + promedioNotas + "Estas aprobado, pero rendis final")

}
else {
    alert ("Tu nota final es:" + promedioNotas + "desaprobaste, recursas la materia :c")

}