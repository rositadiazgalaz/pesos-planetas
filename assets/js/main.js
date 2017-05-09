
class Planetas
{
	constructor (nombre, peso)
	{
		this.nombre = nombre;
		this.peso = peso;
		this.calculo = function (tierra){ return tierra * this.peso}
	}
}


var jupiter = new Planetas ("Júpiter", 2.55);
var venus = new Planetas ("Venus", 0.87);
var urano = new Planetas ("Urano", 0.99);
var marte = new Planetas ("Marte", 0.38);
var mercurio = new Planetas ("Mercurio", 0.39);
var saturno = new Planetas ("Saturno", 0.93);
var neptuno = new Planetas ("Neptuno", 1.38);
var luna = new Planetas ("Luna", 0.17);
var resultado = document.getElementById("contenido");


function calcular ()
{
	printHTML("")
	var arrPlanetas = [jupiter,venus,urano,marte,mercurio,saturno,neptuno,luna];
	var peso = document.getElementById("pesoTierra").value;
	arrPlanetas.forEach(function(elemento){ return resultado.innerHTML += elemento.nombre + " " + "<input type='text' value='" 
		+ elemento.calculo(peso) + "'>" + "<br><br>"})
	document.getElementById("pesoTierra").value = "";
}

function printHTML (html)
{
  resultado.innerHTML = '';
  resultado.innerHTML = html;
}

