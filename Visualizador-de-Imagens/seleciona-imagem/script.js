/*função que avalia se a extensão do arquivo do computador do usuário
é do formato compatível (JPEG ou PNG)*/
function verificaExtensaoDoArquivo(arquivo){
  var caminho = arquivo.value;
  var indice = caminho.lastIndexOf('.');
  var extensao = caminho.substring(indice+1, caminho.length).toLowerCase();

  if (extensao.localeCompare("jpg") === 0 || 
        extensao.localeCompare("jpeg") === 0 ||
        extensao.localeCompare("png") === 0){
    return true;
  } else {
    return false;
  }
}

/*função que obtem uma imagem de um arquivo no computador do usuário e a utiliza
para alterar a imagem definida no elemento "minhaImagem" */
function exibeImagemDoArquivo() {
  var imgFile = document.getElementById("imagemDoArquivo");
  
  if(verificaExtensaoDoArquivo(imgFile)){
    
    if (imgFile.files && imgFile.files[0]) {
      var reader = new FileReader();
      reader.onload = function(event) {
          var dataUri = event.target.result,
          img = document.createElement("img");
          img.src = dataUri;
          document.getElementById("minhaImagem").src = dataUri;
      };
       reader.onerror = function(event) {
           console.error("O arquivo não pôde ser lido! Code " + event.target.error.code);
       };
       reader.readAsDataURL(imgFile.files[0]);
    }
  } else {
    alert("Formato de arquivo não compatível.");
  }
}

/*função que obtem uma URL e a utiliza para alterar 
a imagem definida no elemento "minhaImagem" */
function exibeImagemDaURL(){
  var caminhoDaImagem = document.getElementById("textoDaURL");
  document.getElementById("minhaImagem").src = caminhoDaImagem.value;
}

/*função que aumenta o tamanho da imagem do campo "minhaImagem" em uma proporção de 1.5*/
function aumenta(){
  var imagem = document.getElementById("minhaImagem");
  imagem.width = imagem.width*1.5;
  //imagem.height = imagem.height*1.5; //está deformando a imagem
}

/*função que diminui o tamanho da imagem do campo "minhaImagem" em uma proporção de 1.5*/
function diminui(){
  var imagem = document.getElementById("minhaImagem");
  imagem.width = imagem.width/1.5;
  //imagem.height = imagem.height/1.5;
  
  //para a imagem não sair fora da área de exibição
  imagem.style.top = 0;
  imagem.style.left = 0;
}

function startDrag(e) {
	if (!e) {
		e = window.event;
	}
	// IE usa srcElement, outros navegadores usam target
	var targ = e.target ? e.target : e.srcElement;
	
	//se o alvo do mouse não for um elemento "arrastável"
	if (targ.className != "arrastavel") {return}

	//se a imagem for menor que a div não arraste
	if (verificaImagemMenorQueAreaExibicao()) {
    return;
  }
    
	//calculando as coordenadas X e Y do evento
	offsetX = e.clientX;
	offsetY = e.clientY;

	if(!targ.style.left) { targ.style.left='0px'}
	if (!targ.style.top) { targ.style.top='0px'}

	coordX = parseInt(targ.style.left);
	coordY = parseInt(targ.style.top);
	drag = true;

	//movendo a imagem
  document.onmousemove=dragImage;
}

function dragImage(e) {
	if (!drag) {return}
	if (!e) {e= window.event}
	var targ=e.target?e.target:e.srcElement;
	targ.style.left=coordX+e.clientX-offsetX+'px';
	targ.style.top=coordY+e.clientY-offsetY+'px';
	return false;
}

function stopDrag() {
	drag=false;
}

function iniciaArrasto(){
  document.onmousedown = startDrag;
}

function paraArrasto(){
  document.onmouseup = stopDrag;
}

function getAlturaImagem(){
  var alturaImagem = document.getElementById("minhaImagem").height;
  return alturaImagem;
}

function getLarguraImagem(){
  var larguraImagem = document.getElementById("minhaImagem").width;
  return larguraImagem;
}

function getAlturaAreaExibicao(){
  var alturaDiv = document.getElementById("areaExibicao").style.height;
  if (!alturaDiv) { 
    setAlturaAreaExibicao();
  }
  alturaDiv = parseInt(document.getElementById("areaExibicao").style.height);
  return alturaDiv;
}

function setAlturaAreaExibicao(altura){
  document.getElementById("areaExibicao").style.height = altura;
}

function getLarguraAreaExibicao(){
  var larguraDiv = document.getElementById("areaExibicao").style.width;
  if (!larguraDiv) { 
    setLarguraAreaExibicao();
  }
  larguraDiv = parseInt(document.getElementById("areaExibicao").style.width);
  return larguraDiv;
}

function setLarguraAreaExibicao(largura){
  document.getElementById("areaExibicao").style.width = largura;
}

function verificaImagemMenorQueAreaExibicao(){
  if (getAlturaImagem() < getAlturaAreaExibicao() && getLarguraImagem() < getLarguraAreaExibicao()){
    return true;
  } else {
    return false;
  }
}

//função que define o tamanho da área de exibição
function constroiAreaExibicao(){
  setLarguraAreaExibicao("600px");
  setAlturaAreaExibicao("400px");
}

window.onload = constroiAreaExibicao;


