window.onload = () => {
    let carga = document.getElementById('contenedor_carga');
    carga.classList.add('cargado');
}



let hambur =  document.getElementById('hamburguesa');
let botonAcerca = document.getElementById('acerca');
let pantalla = document.getElementById('pantalla');


botonAcerca.addEventListener('click', function(){
    pantalla.classList.toggle('pantalla2')
});
/* botonAcerca.addEventListener('click', function(){

    if(pantalla.classList.contains('pantalla2')){

        pantalla.classList.remove('pantalla2');

    }else{

        pantalla.classList.add('pantalla2');

    }

}); */

let cont = 0;

hambur.addEventListener('click', function(){

    let despliegue = document.getElementById('despliegue');
 
    if(cont==1){
        despliegue.style.visibility = 'hidden';
        despliegue.style.transform = 'translate(-100%)';
        cont = 0;
    }else{
        despliegue.style.visibility = 'visible';
        despliegue.style.transform = 'none';
        cont  = 1;
    }
});


   
window.addEventListener('scroll', function(){

    let altura = window.innerHeight/1.3;
    let imagen = document.getElementById('contenedor'); 
    let distancia = imagen.getBoundingClientRect().top;


    imagen.classList.add('parrafo2');
 
    if(distancia <= altura){
        imagen.classList.add('aparece');
    }else{
        imagen.classList.remove('aparece');
    }

})

let contenedor = document.getElementById('contenedor');
contenedor.innerHTML = '<button style="margin: 20px; width: 100px; height: 100px;" id="añadir" >Añadir</button>';

let añadir = document.getElementById('añadir');

let contador2 = 0;

añadir.addEventListener('click', function(){

    contador2 = contador2 + 1;
    let nodo = document.createElement('p');
    nodo.className = 'parrafo';
    let texto = document.createTextNode('nodo ' + contador2);
    nodo.appendChild(texto);
    contenedor.appendChild(nodo);

});

for(var i=0; i<=5; i++){
    let nodo = document.createElement('p');
    nodo.className = 'parrafo';
    let texto = document.createTextNode('nodo ' + i);
    nodo.appendChild(texto);
    contenedor.appendChild(nodo);
}

let activo = document.querySelectorAll('#despliegue li');

activo.forEach( elemento =>{
    elemento.addEventListener('click', () =>{
        console.log('nada!');
    })
})