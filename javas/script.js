var textEntrada = document.querySelector("#entrada-texto");
var outEntrada = document.querySelector("#resultado");

function criptografar(){
    var texto = textEntrada.value;

    var cripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "izet")
                            .replace(/a/g, "acor")
                            .replace(/o/g, "orit")
                            .replace(/u/g, "umet");

    document.getElementById('resultado').innerHTML = '<textarea readonly id= "entrada-texto" >' + cripto +'</textarea>' + '<button class="btn-copiar" id="copiar"onclick="copiar()">copiar</button>';;
    
}

function descriptografar(){
    var texto = textEntrada.value;

    var descripto = texto.replace(/enter/g, "e")
                               .replace(/izet/g, "i")
                               .replace(/acor/g, "a")
                               .replace(/orit/g, "o")
                               .replace(/umet/g, "u");

    document.getElementById('resultado').innerHTML = '<textarea readonly id="entrada-texto" >' + descripto + '</textarea>' +'<button class="btn-copiar" id="copiar"onclick="copiar()">copiar</button>';;
}

function copiar(){
    var textoCop = document.getElementById('entrada-texto');
    textoCop.select();
    document.execCommand ('copy');
    alert("Texto Copiado");

}

