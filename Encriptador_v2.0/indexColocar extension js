const textRegAcen = /[A-Záéíóú]/gm;

function eject_encript(){
    let letrasEncript = document.getElementById('text_Convert').value;
    console.log(letrasEncript.match(textRegAcen));
    console.log(textRegAcen.test(letrasEncript));

    if((textRegAcen.test(letrasEncript)) !== true){
        console.log(textRegAcen.test(letrasEncript));
        ocultar_mostrar(letrasEncript, null);
    }
    else{
        alert('El texto no está en minúscula o sin acentos');
    }
    letrasEncript.re
}

function eject_desencript(){

    let letrasDesencript = document.getElementById('text_Convert').value;
    console.log(letrasDesencript.match(textRegAcen));

    if((textRegAcen.test(letrasDesencript)) !== true){
        ocultar_mostrar(null, letrasDesencript);
    }
    else{
        alert('El texto no está en minúscula o sin acentos');
    }
}

function ocultar_mostrar(palabra1, palabra2){
    document.getElementById('logo_muneco').style.opacity = 0;
    document.getElementById('mess1').style.opacity = 0;
    document.getElementById('mess2').style.opacity = 0;
    document.getElementById('text_Convert').value = " ";

    let words = null;
    
    if(palabra1 != null){
        words = copyEncript(palabra1);
        if(words != null){
            document.getElementById('text_Convert').value = "¡Texto Encriptado!";
            document.getElementById('text_Convert').style.color = "#0a3d0a";
            copiar(words);
        }
    }
    if(palabra2 != null){
        words = copyDesencript(palabra2);
        if(words != null){
            document.getElementById('text_Convert').value = "¡Texto Desencriptado!";
            document.getElementById('text_Convert').style.color = "#0a3d0a";
            document.getElementById('text_label3').style.color = "#052051";
            copiar(words);
        }
    }
}

var letraCopyDes = null;

function copyEncript(lineas){
    let lineasArr = [];
    let copitt = [];
    lineasArr = lineas.toLowerCase();

    const letras = ['a','e','i','o','u'];
    const cambio = ["ai", "enter", "imes", "ober", "ufat"];

    for(let i = 0; i < lineasArr.length; i++){
        console.log(lineasArr[i]); 
        if (lineasArr[i] == letras[0]){
            copitt[i] = cambio[0];
        }
        else if (lineasArr[i] == letras[1]){
            copitt[i] = cambio[1];
        }
        else if (lineasArr[i] == letras[2]){
            copitt[i] = cambio[2];
        }
        else if (lineasArr[i] == letras[3]){
            copitt[i] = cambio[3];
        }
        else if (lineasArr[i] == letras[4]){
            copitt[i] = cambio[4];
        }
        else{
            copitt[i] = lineasArr[i];
        }
    }
    console.log(copitt);
    letraCopyDes = copitt;
    return letraCopyDes.join('');
}

function copiar(linea){
    document.getElementById('text_label3').innerText = linea;
}

function buttonCopy(){
    document.getElementById('text_Convert').value = "    Texto Aquí";
    document.getElementById('text_Convert').style.color = "rgba(62, 66, 72, 0.7)";

    let plaHolder = document.getElementById('text_Convert');
    plaHolder.addEventListener('focus', () => {
        document.getElementById('text_Convert').value = "";
        document.getElementById('text_Convert').style.color = "#052051";
    })
    let copiartext = null;
        copiartext = document.getElementById('text_label3').innerText;
        navigator.clipboard.writeText(copiartext).then(function() {
        console.log('¡Copiado!')
      }, function() {
        console.log('¡Ups! No se copió');
      });
}
//Ahora el Programa para Desencriptar el texto:



function copyDesencript(lineas){

    const textoo = lineas;
    console.log(textoo);
    document.getElementById('text_label3').innerText = " ";
    

    let textRegai = /ai/gim;
    let textRegeenter = /enter/gim;
    let textRegimes = /imes/gim;
    let textRegober = /ober/gim;
    let textRegufat = /ufat/gim;

    let lineasArr = [];
    let copitt = [];
    lineasArr = letraCopyDes;
    console.log(lineasArr);

    const letras = ["ai", "enter", "imes", "ober", "ufat"];
    const cambio = ['a','e','i','o','u'];

    if(lineasArr != null){

        for(let i = 0; i < lineasArr.length; i++){
            if ((lineasArr[i] == letras[0])){
                copitt[i] = cambio[0];
            }else if ((lineasArr[i] == letras[1])){
                copitt[i] = cambio[1];
            }else if ((lineasArr[i] == letras[2])){
                copitt[i] = cambio[2];
            }else if ((lineasArr[i] == letras[3])){
                copitt[i] = cambio[3];
            }else if ((lineasArr[i] == letras[4])){
                copitt[i] = cambio[4];
            }else{
                copitt[i] = lineasArr[i];
            }
        }
        return copitt.join('');
    }else{
        if (textoo.match(textRegai) != null) {
            copitt = textoo.replace(textRegai, 'a');
            console.log(copitt);
        }
        if (copitt.match(textRegeenter) != null) {
            copitt = copitt.replace(textRegeenter, 'e');
            console.log(copitt);
        }
        if (copitt.match(textRegimes) != null) {
            copitt = copitt.replace(textRegimes, 'i');
            console.log(copitt);
        }
        if (copitt.match(textRegober) != null) {
            copitt = copitt.replace(textRegober, 'o');
            console.log(copitt);
        }
        if (copitt.match(textRegufat) != null) {
            copitt = copitt.replace(textRegufat, 'u');
            console.log(copitt);
        }

        return copitt;
    }
}    



