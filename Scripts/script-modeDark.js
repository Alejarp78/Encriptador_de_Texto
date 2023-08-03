window.onload = function (){
    console.log("¡cargada la página del Modo Oscuro!");

    function dark_ligthBoton() {
        console.log("Funcion dark_ligthBoton ejecutada");
    };
    let botonPresionado = dark_ligthBoton;
    
    //Obteniedo el valor del color preferido en el dispositivo por el usuario.
    let preferedColorSchemeWindow = "light";
    preferedColorSchemeWindow = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

    //Configurando el LocalStorage para asignar un valor por defecto para theme:
    if (botonPresionado.value == undefined) {
        if (localStorage.getItem('theme') == undefined || preferedColorSchemeWindow == undefined) {
            //console.log("El Theme no esta definido aún \n");
            //Se asigna un valor por defecto para el Theme:
            let preferedColorSchemeManual = "light";
            localStorage.setItem('theme', preferedColorSchemeManual);
            //console.log(`Nuevo valor por defecto será: ${localStorage.getItem('theme')}`);
        };

        //localStorage.clear();
        //Actualizando el dato del Scheme para el valor theme del dispositivo:
        
        //En caso de que no se cumpla que el color por defecto elegido por el usuario no sea light:
        if (preferedColorSchemeWindow != 'light') {
            localStorage.setItem('theme', preferedColorSchemeWindow);
            //console.log(`El valor corregido y actual para Theme es: ${localStorage.getItem('theme')}`);
        };

        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
        console.log("El color preferido corregido es: " + localStorage.getItem('theme'));
    };


    if ((localStorage.getItem('theme')) == 'light') {

        let boton_derecha__sun = document.getElementById('circle-dark__right');
        boton_derecha__sun.classList.toggle('circle-dark_right_new');
    
        let boton_izquierda__moon = document.getElementById('circle-dark__left');
        boton_izquierda__moon.classList.toggle('circle-dark_left_new');
    
    } else if (localStorage.getItem('theme') == 'dark') {

        let boton_derecha__sun = document.getElementById('circle-dark__right');
        boton_derecha__sun.classList.toggle('circle-dark_right_newDark');
    
        let boton_izquierda__moon = document.getElementById('circle-dark__left');
        boton_izquierda__moon.classList.toggle('circle-dark_left_newDark');

        let boton_icono__sun = document.getElementById('indicate__sun');
        boton_icono__sun.classList.toggle('indicate_sun_new');
    
        let boton_icono__moon = document.getElementById('indicate__moon');
        boton_icono__moon.classList.toggle('indicate_moon_new');

        let base_botonDark = document.getElementById('rail-base__up');
        base_botonDark.classList.toggle('rail-base_up_newDark');    
    };
};

//Valores que cambian al ejecutar el boton:
var preferedColor_Scheme;
function dark_ligthBoton() {

    console.log("leido");
    //console.log(window.matchMedia('(prefers-color-scheme: light)').matches);

    preferedColor_Scheme = (localStorage.getItem('theme') == 'light') ? themeLight() : themeDark();
};

function themeLight() {
    console.log("Ejecutado Light");
    preferedColor_Scheme = "dark";
    console.log(`El nuevo color del tema elegido por el usuario es: ${preferedColor_Scheme}`);
    localStorage.setItem('theme', preferedColor_Scheme);
    document.documentElement.setAttribute('data-theme', preferedColor_Scheme);
    //console.log(`Nuevo valor elegido usuario por defecto será: ${localStorage.getItem('theme')}`);
    //Cambio de color de la base del boton si es dark desde el pricipio
    let base_botonDark = document.getElementById('rail-base__up');
    base_botonDark.classList.toggle('rail-base_up_newDark');   
};

function themeDark() {
    console.log("Ejecutado Dark");
    preferedColor_Scheme = "light";
    localStorage.setItem('theme', preferedColor_Scheme);
    document.documentElement.setAttribute('data-theme', preferedColor_Scheme);
    console.log(`Nuevo valor elegido principal por defecto será: ${localStorage.getItem('theme')}`);

    //Cambio de color de la base del boton
    let base_boton = document.getElementById('rail-base__up');
    base_boton.classList.toggle('rail-base_up_new');
};