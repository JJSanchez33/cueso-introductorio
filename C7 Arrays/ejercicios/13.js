function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const numerosPares= array.filter((paares)=>{
         return  paares%2===0
  })
   return numerosPares
}

module.exports = filtrarNumerosPares;
