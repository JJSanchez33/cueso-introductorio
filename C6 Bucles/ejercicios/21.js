function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let contador = true
  while(contador){
    numero/=2
    if(numero%2!==0 &&  numero%2 !==1){
      return false
    }else if(numero === 1){
      return  true
    }
     contador++
  }
   
}

module.exports = esPotenciaDeDos;
