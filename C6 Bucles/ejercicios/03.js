function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x){
    return Math.max(x,y)
  }else if( x === y){
    return  y
  }

}

module.exports = obtenerMayor;
