function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const  elemetoAleatorio= Math.floor(Math.random()*array.length)
    return array[elemetoAleatorio]
 
 }

module.exports = obtenerElementoAleatorio;
