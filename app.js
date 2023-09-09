import { agregarProducto } from "./firebase.js"

// Obtenemos el boton del formulario para cargar los datos
let btnGuardar = document.getElementById('btnGuardar')

// creamos una funcion que nos permita guardar los datos en la base de datos de firestore
btnGuardar.addEventListener('click', () => {
    let persona = document.getElementById('selectorName').value;
    let producto = document.getElementById('inputProducto').value;
    let cantidad = document.getElementById('inputCantidad').value;

    agregarProducto(producto, cantidad,persona) // agregamos los datos a la base de datos de firestore
    
    // con esto reseteamos el form en blanco
    document.getElementById('selectorName').value = '';
    document.getElementById('inputProducto').value = '';
    document.getElementById('inputCantidad').value = '';
})


