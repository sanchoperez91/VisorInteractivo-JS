var divGeneral=document.createElement('div');
divGeneral.id='divGeneral';
document.body.appendChild(divGeneral);

var divAlto=document.createElement('div');
divAlto.id='divAlto';
divGeneral.appendChild(divAlto);


var divFlecha1=document.createElement('div');
divFlecha1.id='divFlecha1';
divAlto.appendChild(divFlecha1);
var imgFlecha1=document.createElement('img');
imgFlecha1.id='imgFlecha1';
imgFlecha1.src='/img/flecha-correcta-izq.png';
divFlecha1.appendChild(imgFlecha1);

var divImagen=document.createElement('div');
divImagen.id='divImagen';
divAlto.appendChild(divImagen);
var imgPrincipal=document.createElement('img');
imgPrincipal.id='imgPrincipal';
imgPrincipal.src='/img/foto1.jpg';
divImagen.appendChild(imgPrincipal);


var divFlecha2=document.createElement('div');
divFlecha2.id='divFlecha2';
divAlto.appendChild(divFlecha2);
var imgFlecha2=document.createElement('img');
imgFlecha2.id='imgFlecha2';
imgFlecha2.src='/img/flecha-correcta-der.png';
divFlecha2.appendChild(imgFlecha2);

var divBajo=document.createElement('div');
divBajo.id='divBajo';
divGeneral.appendChild(divBajo);

var divCir1=document.createElement('div');
divCir1.id='divCir1';
divCir1.classList='circulos';
divBajo.appendChild(divCir1);
var imgCir1=document.createElement('img');
imgCir1.id='imgCir1';
imgCir1.src='/img/new-moon.png';
divCir1.appendChild(imgCir1);

var divCir2=document.createElement('div');
divCir2.id='divCir2';
divCir2.classList='circulos';
divBajo.appendChild(divCir2);
var imgCir2=document.createElement('img');
imgCir2.id='imgCir2';
imgCir2.src='/img/dry-clean.png';
divCir2.appendChild(imgCir2);

var divCir3=document.createElement('div');
divCir3.id='divCir3';
divCir3.classList='circulos';
divBajo.appendChild(divCir3);
var imgCir3=document.createElement('img');
imgCir3.id='imgCir3';
imgCir3.src='/img/dry-clean.png';
divCir3.appendChild(imgCir3);

var divCir4=document.createElement('div');
divCir4.id='divCir4';
divCir4.classList='circulos';
divBajo.appendChild(divCir4);
var imgCir4=document.createElement('img');
imgCir4.id='imgCir4';
imgCir4.src='/img/dry-clean.png';
divCir4.appendChild(imgCir4);

var divCir5=document.createElement('div');
divCir5.id='divCir5';
divCir5.classList='circulos';
divBajo.appendChild(divCir5);
var imgCir5=document.createElement('img');
imgCir5.id='imgCir5';
imgCir5.src='/img/dry-clean.png';
divCir5.appendChild(imgCir5);

var divCir6=document.createElement('div');
divCir6.id='divCir6';
divCir6.classList='circulos';
divBajo.appendChild(divCir6);
var imgCir6=document.createElement('img');
imgCir6.id='imgCir6';
imgCir6.src='/img/dry-clean.png';
divCir6.appendChild(imgCir6);


// Programa:
const fotos = [
    "/img/foto1.jpg",
    "/img/foto2.jpg",
    "/img/foto3.jpg",
    "/img/foto4.jpg",
    "/img/foto5.jpg",
    "/img/foto6.jpg"
];
const lunas =[
    "/img/new-moon.png",
    "/img/dry-clean.png",
    "/img/dry-clean.png",
    "/img/dry-clean.png",
    "/img/dry-clean.png",
    "/img/dry-clean.png",
]
var x=0;
var y=6;

function actualizarLunas() {
    imgCir1.src = "/img/dry-clean.png";
    imgCir2.src = "/img/dry-clean.png";
    imgCir3.src = "/img/dry-clean.png";
    imgCir4.src = "/img/dry-clean.png";
    imgCir5.src = "/img/dry-clean.png";
    imgCir6.src = "/img/dry-clean.png";
    
    switch (x) {
        case 0:
            imgCir1.src = "/img/new-moon.png";
            break;
        case 1:
            imgCir2.src = "/img/new-moon.png";
            break;
        case 2:
            imgCir3.src = "/img/new-moon.png";
            break;
        case 3:
            imgCir4.src = "/img/new-moon.png";
            break;
        case 4:
            imgCir5.src = "/img/new-moon.png";
            break;
        case 5:
            imgCir6.src = "/img/new-moon.png";
            break;
    }
}
divFlecha1.addEventListener('click', function() {  
    x--; 
    if (x<0) {
        x = 5;
    }
    imgPrincipal.src = fotos[x]; 
    actualizarLunas();
});

divFlecha2.addEventListener('click', function() {       
    x++;       
    if(x>5){
        x=0;
    }
    imgPrincipal.src=fotos[x]; 
    actualizarLunas();  
});




