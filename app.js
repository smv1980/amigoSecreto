// Desafío Amigo Secreto Febrero 2025 

/* 1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
lo agregarán a una lista visible al hacer clic en "Adicionar".*/
/* 2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta 
pidiendo un nombre válido.*/

//Variables
let amigos = [] //Va guargando los nombres de los amigos ingresados en Lista

//Función para Agregar amigos
function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo'); //Referencia a "amigo" en HTML
    let nombreAmigo = inputAmigo.value;     //Obtiene valor

    if (!nombreAmigo) { //Si no se ingresa nombre (Evita generar registros vacíos)
        alert ("Ingresa un nombre por favor"); 
        return;
    }
    amigos.push(nombreAmigo); //Agrega nombre a la lista "amigos"
    inputAmigo.value ="";  //Limpiar el campo de texto
    inputAmigo.focus(); // Usuario no tiene que hacer click nuevamente para ingresar nombre
    visualizarAmigos (); //Llama la función "visualizarAmigos" definida abajo
}

/* 3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo 
de entrada.*/

function visualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");  //Referencia a "listaAmigos" en HTML
    listaAmigos.innerHTML = ""; //Permite modificar el HTML eliminando contenido previo

    for(let i=0; i < amigos.length; i++){  //Loop parte en 0 hasta el largo de "amigos", incremento de 1 
        let item = document.createElement("li");  // Crea una lista
        item.textContent = amigos[i]; //Asigna el texto de lista "amigo" a la lista "item" 
        listaAmigos.appendChild(item); // Agrega la lista "item" dentro de "listaAmigos" del
    }
}

/* 4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará 
aleatoriamente un nombre de la lista y se mostrará en la página. */

function sortearAmigo(){
    if (amigos.length == 0) { //Si NO hay nombres en la lista "amigos" antes de sortear
        alert ("No es posible sortear. Agrega un nombre primero.");
        return;
    }
  
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; //Sorteo Pseudoaleatorio
    let resultado = document.getElementById("resultado");  //Referencia a "resultado" en HTML
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; //Mostra en HTML el resultado del sorteo

    let listaAmigos = document.getElementById("listaAmigos");  //Referencia a "listaAmigos" en HTML
    listaAmigos.innerHTML = ""; //Permite modificar el HTML eliminando contenido previo

    amigos.splice(indiceSorteado, 1); //Elimina el amigo sorteado de la lista "amigos"
    visualizarAmigos(); //Llama la función "visualizarAmigos" definida arriba
}
