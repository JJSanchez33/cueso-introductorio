function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const nuevoString = array.map((devolucion)=>{
    return devolucion.toUpperCase()

})
return nuevoString
}

module.exports = convertirStringAMayusculas;
