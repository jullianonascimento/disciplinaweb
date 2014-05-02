/*função que obtem uma imagem de um arquivo no computador do usuário e a utiliza
para alterar a imagem definida no elemento "minhaImagem" */
function exibeImagemDoArquivo() {
  var imgFile = document.getElementById("imagemDoArquivo");
  if (imgFile.files && imgFile.files[0]) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var dataUri = event.target.result,
        img = document.createElement("img");
        img.src = dataUri;
        document.getElementById("minhaImagem").src = dataUri;
     };
     reader.onerror = function(event) {
         console.error("File could not be read! Code " + event.target.error.code);
     };
     reader.readAsDataURL(imgFile.files[0]);
  }
}

/*função que obtem uma URL e a utiliza para alterar 
a imagem definida no elemento "minhaImagem" */
function exibeImagemDaURL(){
  var caminhoDaImagem = document.getElementById("textoDaURL").value;
  document.getElementById("minhaImagem").src = caminhoDaImagem;
}

/*função que aumenta o tamanho da imagem do campo "minhaImagem" em uma proporção de 1.5*/
function aumenta(){
  var imagem = document.getElementById("minhaImagem");
  imagem.width = imagem.width*1.5;
  var altura = imagem.height*1.5;
}

/*função que diminui o tamanho da imagem do campo "minhaImagem" em uma proporção de 1.5*/
function diminui(){
  var imagem = document.getElementById("minhaImagem");
  imagem.width = imagem.width/1.5;
  var altura = imagem.height/1.5;
}

