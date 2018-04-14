

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
	},3000);
	
}
