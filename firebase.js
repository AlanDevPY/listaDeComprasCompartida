// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKON90lj8HWLiS_pOnb0k9wZj3EeyIec",
  authDomain: "listadecomprascompartida-c215d.firebaseapp.com",
  projectId: "listadecomprascompartida-c215d",
  storageBucket: "listadecomprascompartida-c215d.appspot.com",
  messagingSenderId: "615407700979",
  appId: "1:615407700979:web:9c93ccd297138bd7c2e086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

// Creando Funciones

// funcion de agregar productos a la base de datos de Firestore
export const agregarProducto = (producto, cantidad, persona) => {
  try {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Usar formato de 24 horas
    };

    const time = new Date().toLocaleString("es-ES", options); // Cambia 'es-ES' al código de tu localización
    addDoc(collection(db,"listaDeCompras"),{
      producto: producto,
      cantidad: cantidad,
      persona: persona,
      time:time
    });
  }
  catch {
    console.error('Error al agregar producto', error)
  }
}


// funcion de obtener productos de la base de datos de Firestore
export const obtenerProductos = (callback) => onSnapshot(collection(db,'listaDeCompras'),callback)

// funcion para eliminar datos de la base de datos
export const borrarProducto = (id) => deleteDoc(doc(db,'listaDeCompras',id));
