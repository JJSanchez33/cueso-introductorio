function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  const  nuevoArray = array.find((item)=>{
            if( item > 10){
              return item
            }
  })
   return nuevoArray
}

module.exports = contarElementosMayoresA10;
