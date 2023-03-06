const btn = document.querySelector('[data-btn]');

let porcentaje = document.querySelector('#porcentaje');


let montoInicial = document.querySelector('#monto');

let mesUno = document.querySelector('#mesUno');
let mesDos = document.querySelector('#mesDos');
let mesTres = document.querySelector('#mesTres');
let mesCuatro = document.querySelector('#mesCuatro');
let mesCinco = document.querySelector('#mesCinco');
let mesSeis = document.querySelector('#mesSeis');
let mesSiete = document.querySelector('#mesSiete');
let mesOcho = document.querySelector('#mesOcho');
let mesNueve = document.querySelector('#mesNueve');
let mesDiez = document.querySelector('#mesDiez');
let mesOnce = document.querySelector('#mesOnce');
let mesDoce = document.querySelector('#mesDoce');

let closeAlert = document.querySelector('.alert_numerico--icon');
let alertDiv = document.querySelector('.alert__numerico');

function calcular () {
	let anual = porcentaje.value;
	console.log(anual);
	const monto = montoInicial.value;
	console.log(monto);
	if(anual == '' || monto == ''){
		alertDiv.classList.remove('inactive');
	} else {
		let interes = parseInt((montoInicial.value * anual)/100)/12;

		let uno = parseInt(monto) + parseInt(interes);
		mesUno.innerHTML = `1° mes: $${uno}`;

		let dos = Math.floor(parseInt(uno) + (((parseInt(uno) * anual)/100)/12));
		mesDos.innerHTML = `2° mes: $${dos}`;

		let tres = Math.floor(parseInt(dos) + (((parseInt(dos) * anual)/100)/12));
		mesTres.innerHTML = `3° mes: $${tres}`;

		let cuatro = Math.floor(parseInt(tres) + (((parseInt(tres) * anual)/100)/12));
		mesCuatro.innerHTML = `4° mes: $${cuatro}`;

		let cinco = Math.floor(parseInt(cuatro) + (((parseInt(cuatro) * anual)/100)/12));
		mesCinco.innerHTML = `5° mes: $${cinco}`;

		let seis = Math.floor(parseInt(cinco) + (((parseInt(cinco) * anual)/100)/12));
		mesSeis.innerHTML = `6° mes: $${seis}`;

		let siete = Math.floor(parseInt(seis) + (((parseInt(seis) * anual)/100)/12));
		mesSiete.innerHTML = `7° mes: $${siete}`;

		let ocho = Math.floor(parseInt(siete) + (((parseInt(siete) * anual)/100)/12));
		mesOcho.innerHTML = `8° mes: $${ocho}`;

		let nueve = Math.floor(parseInt(ocho) + (((parseInt(ocho) * anual)/100)/12));
		mesNueve.innerHTML = `9° mes: $${nueve}`;

		let diez = Math.floor(parseInt(nueve) + (((parseInt(nueve) * anual)/100)/12));
		mesDiez.innerHTML = `10° mes: $${diez}`;

		let once = Math.floor(parseInt(diez) + (((parseInt(diez) * anual)/100)/12));
		mesOnce.innerHTML = `11° mes: $${once}`;

		let doce = Math.floor(parseInt(once) + (((parseInt(once) * anual)/100)/12));
		mesDoce.innerHTML = `12° mes: $${doce}`;

	}
}


btn.addEventListener('click', calcular);

closeAlert.addEventListener('click', ()=> {
	alertDiv.classList.add('inactive');
})

