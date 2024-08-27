function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:}

  const arraynew=[]
  const numero=6
  for(let  i = 0; i <= 10; i++){

       arraynew.push(numero*i)
  
  }
   return arraynew

}

module.exports = tablaDelSeis;
