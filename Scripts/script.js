window.onload = function (){
    console.log("Desafio No1 Aura Latam - ORACLE NextEducation\n¡Página Cargada!");
    //Código para que al hacer click en el Texarea parpadee la barra de texto.
};

//Expresiones regulares (Regex) para el filtrado de las letras.
const textExReMay = /[A-Z]/gm;
const textExReUnicMin = /[áéíóú]/gm; //Busqueda global y multilinea.
const textExReUnicMay = /[ÁÉÍÓÚ]/gm;
const textRegai = /\ai/gm;
const textRegenter = /\enter/gm;
const textRegimes = /\imes/gm;
const textRegober = /\ober/gm;
const textRegufat = /\ufat/gm;

//Primera funciones que se ejecuta al pulsar el botón "Encriptar" y "Desencriptar" en HTML.
var xE = 0;
function funcBotonEncriptar(){
    //Inicializacion de la variable "intTexto" como de tipo string.
    let intTexto = " ";
    let palabraConvertir = "¡Texto Encriptado!"; // Texto del Texarea.
    let palabraTitulo = "Texto Encriptado"; // Texto del título del Span.
    //Variable "intTexto" recibe el valor del textarea.
    intTexto = document.getElementById('textoCovertir').value;
    //Llama a la función fltro de las letras mayúsculas y mayúsculas-minúsculas con acento.
    if(filtro_Mayus_Acento(intTexto) == false){
        xE++;
        //console.log(`xE = ${xE}`);
    } else if (filtro_Mayus_Acento(intTexto) == true) {
        //console.log(`xE = ${xE}`);
        encriptar_Imagen(); //Código para mostrar el segundo cuadro de texto conformado por la etiqueta "SPAN".
        let convert = convertir_Encriptar(intTexto); // Función para cambiar vocales por combinación de vocales
        efectos(convert, palabraConvertir, palabraTitulo); //En esta función queda implicita la función: convertir_Encriptar"
    };

    if (xE >= 1 && xC >= 0) {
        efectos_copy_Con_MayAcentos();
    };
};
//Función que se utiliza para llamar a la función principal Desencriptar.
var xD = 0;
function funcBotonDesencriptar() {
    //Inicializacion de la variable "intTexto" como de tipo string.
    let intTexto = " ";
    let palabraConvertir = "¡Texto Desencriptado!";
    let palabraTitulo = "Texto Desencriptado";
    //Variable "intTexto" recibe el valor del textarea.
    intTexto = document.getElementById('textoCovertir').value;
    //Llama a la función fltro de las letras mayúsculas y mayúsculas-minúsculas con acento.
    if(filtro_Mayus_Acento(intTexto) == false){
        xD++;
        //console.log(`xD = ${xD}`);
    } else if (filtro_Mayus_Acento(intTexto) == true) {
        //console.log(`xD = ${xD}`);
        encriptar_Imagen(); //Código para mostrar el segundo cuadro de texto conformado por la etiqueta "SPAN".
        let convert = convertir_Desencriptar(intTexto);
        efectos(convert, palabraConvertir, palabraTitulo); //En esta función queda implicita la función: convertir_Encriptar"
    };

    if (xD >= 1 && xC >= 0) {
        efectos_copy_Con_MayAcentos();
    };
};

function filtro_Mayus_Acento(linea){
    //Método test de regex, devuelve true si hay coincidencia con el string.
    let pdtMa = textExReMay.test(linea); 
    let pdtMayUn = textExReUnicMay.test(linea);
    let pdtMinUn = textExReUnicMin.test(linea);
    let minuscula_text = false;

    /* Estas lineas de comparación y decisión son para filtrar el tipo de letra y para notificar las
    letras que se deben cambiar por minúscula sin tilde, el resultado ejecuta varias funciones. */
    if (pdtMa == true || pdtMayUn == true || pdtMinUn == true) {
        if (pdtMa == true && pdtMayUn == false && pdtMinUn == false) {
            textMayusculas(linea);
            minuscula_text == false;
        } else if (pdtMayUn == true && pdtMa == false) {
            textMayusculasTilde(linea);
            minuscula_text == false;
        } else if (pdtMinUn == true && pdtMa == false) {
            textMinusculaTilde(linea);
            minuscula_text == false;
        } else if (pdtMa == true && pdtMayUn == true) {
            textMayuscula_MayusculaTilde(linea);
            minuscula_text == false;
        }else if (pdtMa == true && pdtMinUn == true) {
            textMayus_MinusTilde(linea);
            minuscula_text == false;
        } 
    } else {
        minuscula_text = true;
    }
    //console.log(minuscula_text);
    return minuscula_text;
};

//Funciones vinculadas a la función principal "encript_text"
function textMayusculas(linea1) {

    let numElemn1 = linea1.match(textExReMay).length;
    let letras1 = linea1.match(textExReMay);
    if (numElemn1 == 1) {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa letra que debe cambiarse por minúscula es: "${letras1}"`);
    } else {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa cantidad de letras (${numElemn1}) que deben cambiarse por minúscula\nson: "${letras1}"`);
    }

    return 0;
};

function textMayusculasTilde(linea2) {

    let numElemn2 = linea2.match(textExReUnicMay).length;
    let letras2 = linea2.match(textExReUnicMay);
    if (numElemn2 == 1){
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa letra que debe cambiarse por minúscula sin tilde es: "${letras2}"`);
    } else {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa cantidad de letras (${numElemn2}) que deben cambiarse por minúscula sin tilde\nson: "${letras2}"`);
    }
    return 0;
};

function textMayuscula_MayusculaTilde(linea3) {

    let numElemn1 = linea3.match(textExReMay).length;
    let letras1 = linea3.match(textExReMay);
    let numElemn2 = linea3.match(textExReUnicMay).length;
    let letras2 = linea3.match(textExReUnicMay);

    if (numElemn1 == 1 && numElemn2 == 1) {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa letra que debe cambiarse por minúscula es: "${letras1}", y minúscula sin tilde es: "${letras2}"`);
    } else {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa cantidad de letras mayúscula (${numElemn1}) y con tilde (${numElemn2}), que deben cambiarse por minúscula: "${letras1} y ${letras2}"`);
    }
    return 0;
};

function textMinusculaTilde(linea4) {

    let numElemn3 = linea4.match(textExReUnicMin).length;
    let letras3 = linea4.match(textExReUnicMin);
    if (numElemn3 == 1) {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa letra que debe cambiarse por minúscula sin tilde es: "${letras3}"`);
    } else {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa cantidad de letras (${numElemn3}) que deben cambiarse por minúscula sin tilde\nson: "${letras3}"`);
    }   
    return 0;
};

function textMayus_MinusTilde(linea5) {

    let numElemn1 = linea5.match(textExReMay).length;
    let letras1 = linea5.match(textExReMay);
    let numElemn2 = linea5.match(textExReUnicMin).length;
    let letras2 = linea5.match(textExReUnicMin);

    if (numElemn1 == 1 && numElemn2 == 1) {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa letra que debe cambiarse por minúscula es: "${letras1}", y minúscula sin tilde es: "${letras2}"`);
    } else {
        alert(`El texto debe contener sólo letras en minúsculas y sin acentos.\nLa cantidad de letras mayúscula (${numElemn1}) y con tilde (${numElemn2}), que deben cambiarse por minúscula y sin tilde: "${letras1} y ${letras2}"`);
    }
    return 0;
};

//Código para mostrar el segundo cuadro de texto conformado por la etiqueta "SPAN"

function encriptar_Imagen(){
    let mune = document.getElementById("div_imagenes_grupo");
    mune.style.opacity = 0;
};

//Función para cambiar las vocales simples por letras
function convertir_Encriptar(linea6) {

    let lineasArr = [];
    let copitt = [];
    lineasArr = linea6;

    const letras = ['a','e','i','o','u'];
    const cambio = ["ai", "enter", "imes", "ober", "ufat"];

    for(let i = 0; i < lineasArr.length; i++){
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
    return copitt.join('');
};

//Función para cambiar las palabras por vocales simples.
function convertir_Desencriptar(linea10) {

    let textoo = " ";
    let copitt = " ";
    textoo = linea10;

    if (textRegai.test(textoo)) {
        copitt = textoo.replace(textRegai, 'a');
    }
    if (textRegenter.test(textoo)) {
        copitt = copitt.replace(textRegenter, 'e');
    }
    if (textRegimes.test(textoo)) {
        copitt = copitt.replace(textRegimes, 'i');
    }
    if (textRegober.test(textoo)) {
        copitt = copitt.replace(textRegober, 'o');
    }
    if (textRegufat.test(textoo)) {
        copitt = copitt.replace(textRegufat, 'u');
    }
    return copitt;
};

//Función para aplicar los estilos de la presentación dinámica.
function efectos(function_Convert, text_Textarea, text_Span){
    
    let textoSpan = null;
    let titleTag = null;
    let btn_encriptt = null;
    textoSpan = document.getElementById('textoCopiar');
    btn_encriptt = document.getElementById("textoCovertir");
    titleTag = document.getElementById('box2_FormDes');
    textoSpan.innerHTML = function_Convert; // Función convertir_Encriptar_Desencriptar.
    btn_encriptt.value = text_Textarea; // Texto del texarea.
    titleTag.innerHTML = text_Span; // Texto Titulo del Span.
    btn_encriptt.style.color = "#063e46";
    btn_encriptt.style.textAlign = "center";
    btn_encriptt.style.lineHeight = "280px";
    btn_encriptt.style.fontFamily = "Monaco";
    btn_encriptt.style.fontWeight = "bold";
    btn_encriptt.style.fontSize = "36px";
    titleTag.style.display = "initial";
    titleTag.style.lineHeight = "65px";
    titleTag.style.fontSize = '32px';

    return 0;
};

//Código para copiar el texto que se encuentra en el cuadro de texto de la etiqueta Span y para cambiar las pantallas después de copiado el texto, refrescando cada cuadro de texto e imagenes.
var xC = 0;
function buttonCopy(){

    let copiartext =null;
    copiartext = document.getElementById('textoCopiar').innerHTML;
    navigator.clipboard.writeText(copiartext).then(function() {
        //console.log('¡Copiado!');
        xC++;
        //console.log(`xC = ${xC}`);
    }, function() {
        //console.log('¡Ups! No se copió');
    });

    if ((xE == 0 || xD == 0) && xC >= 0) {
        efectos_copy_Sin_MayAcentos();
    }

    return 0;
};

function efectos_copy_Sin_MayAcentos(){

    // document.getElementsByClassName('textarea_Convert_new').value = "Texto aquí";
    let copiartext = null;
    let plaHolder = null;
    let textTitles = null;
    let mune = document.getElementById("div_imagenes_grupo");
    copiartext = document.getElementById('textoCopiar');
    plaHolder = document.getElementById('textoCovertir');
    textTitles = document.getElementById('box2_FormDes');
    plaHolder.style.color = "#788294";
    plaHolder.innerHTML = "Texto aquí";
    mune.style.opacity = 1;
    textTitles.style.display = 'none';
    copiartext.innerHTML = " ";
    plaHolder.value = '';
    plaHolder.style.lineHeight = '35px';
    plaHolder.style.textAlign = 'start';
    plaHolder.style.fontFamily= "sans-serif";
    plaHolder.style.fontWeight= "50px";
    plaHolder.style.fontSize = "30px";
    plaHolder.style.color = "#052051";

    return 0;
};

function efectos_copy_Con_MayAcentos(){

    //console.log("Espacio para corregir Letras");
       
    return 0;
};
