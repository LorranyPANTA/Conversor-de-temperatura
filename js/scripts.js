function ConverterFarenheit() {
    var grausElementoCelcius = parseInt(
      document.getElementById("temperaturaFarenheit").value
    );
  
    var grausEmFarenheit = (grausElementoCelcius * 9) / 5 + 32;
  
    var grausElementoTela = document.getElementById("gruausConvertido");
    grausElementoTela.innerHTML =
      "Valor em farenheit é " + grausEmFarenheit + " F°";
    document.getElementById("temperaturaFarenheit").value = "";
  }
  
  function ConverterKelvin() {
    var grausElementoCelcius = parseInt(
      document.getElementById("temperaturaKelvin").value
    );
  
    var grausEmKelvin = grausElementoCelcius + 273;
  
    var grausElementoTela = document.getElementById("gruausConvertido");
    grausElementoTela.innerHTML = "Valor em kelvin é " + grausEmKelvin + " K°";
    document.getElementById("temperaturaKelvin").value = "";
  }
  
  //Conversor de temperaturas entre farenheit, kelvin e celcius.
  