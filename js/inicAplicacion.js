/**
 *@fileOverview Contiene la función listener que llama a cambiaColor() al hacer click
 *@version 1.0 
 **/
function manejaLoad() {
	var pulsame = document.getElementById('pulsame');
	pulsame.addEventListener('click', cambiaColor, false);
}