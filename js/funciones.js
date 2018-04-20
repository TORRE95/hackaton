function level(){
	var n = localStorage.getItem('nivel');
	document.getElementById('level').innerText = "Nivel "+n;
}

function mostrar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("contenido").style.marginLeft = "250px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}


function grafica() {
	Chart.defaults.global.legend.display = false;
	var valor1 = (Math.floor(Math.random()*30 + 1));
	var nivel = (Math.floor(Math.random()*30 + 1));
	localStorage.setItem('nivel', nivel);
	var valor2 = 30 - valor1;
	document.getElementById('puntos').innerHTML += valor1;
	document.getElementById('nivel').innerHTML += nivel;
	document.getElementById('puntaje').innerHTML += valor1 +" | 30 días para subir de nivel";
	
	
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	        labels: ["Puntos actuales"],
	        datasets: [{
	        	hidde : true,
	            data: [valor1, valor2],
	            backgroundColor: [
	                '#ffce00'
	            ],
	            borderColor: [
                '#FFFFFF',
                'rgba(255,255,255,0)'
            ],
            borderWidth: 2
	        }]
	    },
	    options: {
	    	cutoutPercentage: 80
	    }
	});
}

function mensaje() {
	alert("En promedio, una persona necesita un consumo diario de 60lts de agua para vivir de manera saludable, tomaremos estos datos para"+
			" hacer el cálculo del uso del agua en la vivienda.");
	window.location = "inicio.html";
}
function llenado() {
	var hola = "";
	var bandera;
	inicioAjax = new XMLHttpRequest();
	inicioAjax.open('GET', 'https://torreextra.000webhostapp.com/sValor.php');
	inicioAjax.send();
		
	inicioAjax.onreadystatechange = function(){
			

		if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {



			inicio = JSON.parse(inicioAjax.responseText);

			if(inicio.length > 0){
				bandera = parseInt(inicio[0].puntaje);
				localStorage.setItem('timer', bandera);
				if(bandera > 60){
					hola = 
						"<div class='card' >"+
			          		"<h1 style='color: red; font-weight: bold;'>Alerta</h1>"+
			          		"<h2>Los niveles del uso de agua rebasan el promedio recomendado por la OMS. Por favor cuida tu consumo para conservar tu racha.</h2"+
			          		"<h2>Usa nuestros cosejos para optimizar tu consumo de agua.</h2"+
			          		"<br><h1 style='font-size: 100%;'>Estado de ahorro</h1>"+
			          		"<h2 style='color:red; font-weight: bold;'>Uso Excesivo de Agua</h2>"+
			        	"</div>";
				}else{
					hola = 
						"<div class='card' >"+
			          		"<h1 style='color: #007849'; font-weight: bold;'>Enhorabuena</h1>"+
			          		"<h2>Los niveles de uso de agua se mantienen en el promedio recomendado por la OMS</h2><h2 style='color:#007849'>¡SIGUE ASÍ!</h2>"+
			          		"<br><h1 style='font-size: 100%;'>Estado de ahorro</h1>"+
			          		"<h2 style='color:#007849; font-weight: bold;'>Óptimo</h2>"+
			        	"</div>";
				}

				
				document.querySelector('article').innerHTML += hola;

			}
					
		}
	}
}

function verificar() {
	var nivelPrincipal = parseInt(localStorage.getItem('nivel'));
	var nivelP1 = document.getElementById('nivelP1').value;
	var nivelP2 = document.getElementById('nivelP2').value;
	var nivelP3 = document.getElementById('nivelP3').value;
	var nivel1 = document.getElementById('nivel1');
	var nivel3 = document.getElementById('nivel3');
	var nivel2 = document.getElementById('nivel2');
	console.log((nivelPrincipal + nivelP2))
	console.log(nivelP2)
	if(nivelPrincipal >= nivelP2){
		nivel2.classList.remove('nivelB');
		nivel2.classList.add('nivel');
	}else{
		nivel2.classList.remove('nivel');
		nivel2.classList.add('nivelB');
	}
	if(nivelPrincipal >= nivelP1){
		nivel1.classList.remove('nivelB');
		nivel1.classList.add('nivel');
	}else{
		nivel1.classList.remove('nivel');
		nivel1.classList.add('nivelB');
	}
	if(nivelPrincipal >= nivelP3){
		nivel3.classList.remove('nivelB');
		nivel3.classList.add('nivel');
	}else{
		nivel3.classList.remove('nivel');
		nivel3.classList.add('nivelB');
	}
}

function actualizar() {
	var timer;
	var bandera;
	inicioAjax = new XMLHttpRequest();
	inicioAjax.open('GET', 'https://torreextra.000webhostapp.com/sValor.php');
	inicioAjax.send();
		
	inicioAjax.onreadystatechange = function(){
			

		if (inicioAjax.readyState == 4 && inicioAjax.status == 200) {



			inicio = JSON.parse(inicioAjax.responseText);

			if(inicio.length > 0){
				bandera = parseInt(inicio[0].puntaje);
				timer = localStorage.getItem('timer');
				if (bandera != timer) {
					window.location = 'inicio.html';
				}

			}
					
		}
	}
	setTimeout(function(){
		console.log("actualizando")
		actualizar();
	},30000);
	
}
function compara() {
var ctx = document.getElementById("caca");

Chart.defaults.global.defaultFontColor = "#ffffff";
Chart.defaults.global.defaultFontSize = 10;

var dataFirst = {
    label: "Consumo de agua por personas sin AMA",
    data: [80, 79, 75, 70, 80, 85, 80],
    lineTension: 0.3,
    fill: false,
    borderColor: '#FFCE00',
    backgroundColor: 'transparent',
    pointBorderColor: '#FFCE00',
    pointBackgroundColor: '#FFCE00',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded',
    borderDash: [2, 2]
  };

var dataSecond = {
    label: "Tu consumo de agua en Litros",
    data: [50, 55, 55, 53, 59, 55, 60],
    lineTension: 0.3,
    fill: false,
    borderColor: '#038fff',
    backgroundColor: '#038fff',
    pointBorderColor: '#038fff',
    pointBackgroundColor: '#038fff',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointStyle: 'rectRounded',
    pointBorderWidth: 2,
  };

var dataThird = {
    label: "Consumo saludable según la OMS",
    data: [61, 61, 61, 61, 61, 61, 61],
    lineTension: 0.3,
    fill: false,
    borderColor: '#00b849',
    backgroundColor: 'transparent',
    pointBorderColor: '#00b849',
    pointBackgroundColor: '#00b849',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded',
    borderDash: [2, 2]
  };

var data = {
  labels: ["Enero", "Marzo", "Mayo", "Julio", "Septiembre", "Noviembre", "Diciembre"],
  datasets: [dataFirst, dataSecond, dataThird]
};

var chartOptions = {

	title: {
		fontColor: 'aliceblue',
        display: true,
        text: 'Gasto de agua general (litros)',
        fontSize: 18,
        fontFamily: 'Helvetica'
    },
 	legend: {
    display: false,
    position: 'top'
  }
};

var lineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: chartOptions,

});
	
}

function rankNivelGasto(){
	var nivel = localStorage.getItem('nivel');
	var ctx = document.getElementById("pipi");

Chart.defaults.global.defaultFontColor = "#ffffff";
Chart.defaults.global.defaultFontSize = 10;

var dataFirst = {
    label: "Litros usados",
    data: [65,59,59,65,65],
    lineTension: 0.3,
    fill: false,
    borderColor: '#FFCE00',
    backgroundColor: 'transparent',
    pointBorderColor: '#FFCE00',
    pointBackgroundColor: '#FFCE00',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded',
    borderDash: [2, 2]
  };

var data = {
  labels: ["1-6", "7-12", "13-18", "19-25", "25+"],
  datasets: [dataFirst]
};

var chartOptions = {

	title: {
		fontColor: 'aliceblue',
        display: true,
        text: 'Promedio de gasto de agua por nivel (litros)',
        fontSize: 18,
        fontFamily: 'Helvetica'
    },
 	legend: {
    display: false,
    position: 'top'
  }
};

var lineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  backgroundColor: 'white',
  options: chartOptions,

});
}



