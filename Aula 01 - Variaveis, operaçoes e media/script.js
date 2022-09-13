function calcular() {
    var nome = document.getElementById("textNome").value.toString()
  var notaPrimeiroBimestre = parseInt(document.getElementById("notaPrimeiro").valueAsNumber)
  var notaSegundoBimestre = parseInt(document.getElementById("notaSegundo").valueAsNumber)
  var notaTerceiroBimestre = parseInt(document.getElementById("notaTerceiro").valueAsNumber)
  var notaQuartoBimestre = parseInt(document.getElementById("notaQuarto").valueAsNumber)
  var resultadoMedia = document.getElementById("resultadoMedia");
    var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

    var notaReal = parseFloat(notaFinal).toFixed(1);

   
  var valorMedia = "Olá " + nome + "! Sua média é " + notaReal
  resultadoMedia.innerHTML = valorMedia;
 
}

