const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');

const canciones = [
    {
        titulo:'Ama De Mi Sol',
        nombre:'Milo j',
        fuente:'music/Milo J - Ama De Mi Sol.mp3'
    },
    {
        titulo:'Frances Limon',
        nombre:'enanitos verdes ',
        fuente:'music/Frances Limon.mp3'
    },
    {
        titulo: "So Beautiful",
        nombre: "DPR",
        fuente: "music/DPR IAN - So Beautiful (OFFICIAL M_V).mp3",
    },
    {
        titulo: "Nerves",
        nombre: "DRP",
        fuente: "music/DPR IAN - Nerves (OFFICIAL M_V).mp3",
    },
    {
        titulo: "Olimpo",
        nombre: "MILO J",
        fuente: "music/MILO J - OLIMPO.mp3",
    },
    {
        titulo: "Mi Flaco",
        nombre: "Mon Laferte",
        fuente: "music/Mon Laferte - Flaco (Audio).mp3",
    },
    {
        titulo: "pase y toque",
        nombre: "Beat Boy",
        fuente: "music/Pase y Toque.mp3",
    },
];

let indiceCancionActual = 0;

function actualizarInfoCancion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata',function(){});
};

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
});

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){
    if(cancion.paused){
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

function reproducirCancion(){
    cancion.play();
    inconoControl.classList.add('bi-pause-fill')
    inconoControl.classList.remove('bi-play-fill')
}

function pausarCancion(){
    cancion.pause();
    inconoControl.classList.remove('bi-pause-fill')
    inconoControl.classList.add('bi-play-fill')
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

// progreso.addEventListener('change', ()=>{
//     reproducirCancion();
// });

botonAdelante.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

actualizarInfoCancion();
