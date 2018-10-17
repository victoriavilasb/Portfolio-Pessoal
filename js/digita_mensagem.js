$(document).ready(function() {
	n=0; //número a ser incrementado
	t = "" //letra incrementada
	v = 100; //velocidade do texto
	var texto = "Here is where I tell {almost} everything about myself.";

	function alerta(){
		t+=texto.charAt(n);

		if(n > texto.length){
			n=0;
			t="H"
		}

		setTimeout(function(){
			alerta();
		}, v);

		$('.texto_autocompleta').html(t);
		n++;
	}
	setTimeout(function() {
		alerta();
	}, v);
	
});