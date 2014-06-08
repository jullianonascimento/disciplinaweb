var numero = 1; //numero da imagem inicial
var qtdeImagens = 5;

function abrirCaixa(str){
	document.getElementById('box').style.display='block';
	document.getElementById('escurecer').style.display='block';
	numero = str;
	abreImagem(numero);
}

function fecharCaixa(){
	document.getElementById('box').style.display='none';
    document.getElementById('escurecer').style.display='none';
}

function abreImagem(str){
	document.imagemAplicativo.src = "images/sinoa00" + str + ".png" ;
}

function proxima(){
	numero++;
	if (numero <= qtdeImagens) {
		document.imagemAplicativo.src = "images/sinoa00" + numero + ".png" ;
	} else {
		numero = qtdeImagens;
	}
}

function anterior(){
	numero--;
	if (numero >= 1) {
		document.imagemAplicativo.src = "images/sinoa00" + numero + ".png" ;
	} else {
		numero = 1;
	}
}