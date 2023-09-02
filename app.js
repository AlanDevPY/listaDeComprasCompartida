import { agregarProducto, obtenerProductos, borrarProducto } from "./firebase.js"

// Obtenemos el boton del formulario para cargar los datos
let btnGuardar = document.getElementById('btnGuardar')

// creamos una funcion que nos permita guardar los datos en la base de datos de firestore
btnGuardar.addEventListener('click', () => {
    let persona = document.getElementById('selectorName').value;
    let producto = document.getElementById('inputProducto').value;
    let cantidad = document.getElementById('inputCantidad').value;
    
    agregarProducto(producto, cantidad, persona) // agregamos los datos a la base de datos de firestore
    
    // con esto reseteamos el form en blanco
    document.getElementById('selectorName').value = '';
    document.getElementById('inputProducto').value = '';
    document.getElementById('inputCantidad').value = '';
})

// Creamos la funcion para mostrat los productos agregados
window.addEventListener("DOMContentLoaded", async () => {
    let tBody = document.getElementById("tBody");
    // Llamar a la función onGetTask cuando se obtienen las tareas de la base de datos
    obtenerProductos((querySnapshot) => {
      let html = ""; // Variable para almacenar el HTML generado
  
      const tasks = []; // Arreglo para almacenar objetos de tareas
  
      // Iterar a través de cada documento en la consulta de tareas
      querySnapshot.forEach((doc) => {
        const task = doc.data(); // Obtener los datos de la tarea
        tasks.push({ ...task, id: doc.id }); // Agregar cada tarea al arreglo 'tasks' con su ID
      });
  
      // Ordenar las tareas por fecha en orden descendente
      tasks.sort((a, b) => b.time.localeCompare(a.time));
  
  
      // Generar el HTML para cada tarea y agregarlo a la variable 'html'
      tasks.forEach((task) => {
        html += `
        <tr>
        <th scope="row">${task.time}</th>
        <td>${task.producto}</td>
        <td>${task.cantidad}</td>
        <td>${task.persona.charAt(0).toUpperCase() + task.persona.slice(1)}</td>
        <td> <button data-id="${task.id}" class="btn btn-danger btn-sm">Terminado</button></td>
      </tr>
           `;
      });
  
      // Insertar el HTML generado en el contenedor de tareas en el DOM
      tBody.innerHTML = html;
  
      // Obtener todos los botones de borrado dentro del contenedor de tareas
      const btnDelet = tBody.querySelectorAll(".btn");
      
      // Agregar un evento de clic a cada botón de borrado
      btnDelet.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          // Llamar a la función deletTask con el ID de la tarea asociado al botón
          borrarProducto(event.target.dataset.id);
        });
      });
    });
  });



