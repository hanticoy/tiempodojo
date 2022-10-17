function descartaMsg() {
    
    let elem = document.querySelector("#alertCookie");
    elem.innerHTML="";
}

function moverAlerta(){
    console.log('hola');
    let elem = document.querySelector("#alertCookie");
    // elem.style.position="absolute";
    elem.style.position = "fixed"
    elem.style.top ='500px'
    elem.style.left ='5px'
   

}
function cambiarTemperatura(tipoTemp) {
    let temp = document.querySelectorAll("#temMinId");
    let valor=0;
    let strValor = '';
    // valor = Math.floor(Math.random() * 3);

    temp.forEach(element => {
        strValor = element.innerHTML;
        strValor = strValor.replace('°','')
        strValor = strValor.replace('<b>','')
        strValor = strValor.replace('</b>','')
        strValor = strValor.valueOf();

        if (tipoTemp=='C'){
            valor = convertirToC(strValor)
        }
        if (tipoTemp=='F'){
            valor = convertirToF(strValor)
        }
      
        element.innerHTML = '<b>' + valor + '°</b>'
    });
    
    temp = document.querySelectorAll("#temMaxId");
    temp.forEach(element => {
        strValor = element.innerHTML;
        strValor = strValor.replace('°','')
        strValor = strValor.replace('<b>','')
        strValor = strValor.replace('</b>','')
        strValor = strValor.valueOf();

        if (tipoTemp=='C'){
            valor = convertirToC(strValor)
        }
        if (tipoTemp=='F'){
            valor = convertirToF(strValor)
        }
      
        element.innerHTML = '<b>' + valor + '°</b>'
    });
}


function cambiarMeteorologia(tipoTemp) {
    
    let valor=0;
    let strValor = '';
    let masCalor = Math.floor(Math.random() * 50);

    let temp = document.querySelectorAll("#temMinId");    
    temp.forEach(element => {
        strValor = element.innerHTML;
        strValor = strValor.replace('°','')
        strValor = strValor.replace('<b>','')
        strValor = strValor.replace('</b>','')
        strValor = parseInt(strValor) + masCalor ;
        element.innerHTML = '<b>' + strValor + '°</b>'
    });
    
    temp = document.querySelectorAll("#temMaxId");
    temp.forEach(element => {
        strValor = element.innerHTML;
        strValor = strValor.replace('°','')
        strValor = strValor.replace('<b>','')
        strValor = strValor.replace('</b>','')
        strValor = parseInt(strValor) + masCalor ;
      
        element.innerHTML = '<b>' + strValor + '°</b>'
    });
}


function convertirToF(celsius) 
{
    let fahrenheit = (celsius * 1.8) + 32
    fahrenheit = fahrenheit.toFixed(0)
   
  return fahrenheit
}

function convertirToC(fahrenheit) 
{
    let  celsius = (fahrenheit - 32) / 1.8
    celsius = celsius.toFixed(0)
   
    return celsius
} 

