 /* Buena practica, todos los archivos JSX deben importar a react */
import React from 'react'

/* Usamos reactDOM para crear nuestro dom virtual (de react) */
import ReactDOM from 'react-dom/client'

/* Importa el componente (funcion) App */
/* 
Los componentes son funciones que retornan JSX (JSX es un codigo muy parecido a HTML)
*/
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)


