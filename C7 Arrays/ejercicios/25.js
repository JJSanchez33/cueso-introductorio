function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
    const elementosPares= numeros.filter((element)=>{
      if(element%2===0){
        return element
      }
    })
     return elementosPares.length

}

module.exports = contarParesConContinue;
