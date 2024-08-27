function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let  posicion=0
                 
  for(let i=0 ; i < numeros.length;i++){
   numeros.sort((a,b)=>{
      return a-b
   })
     }
   
  

  for( let i= 0; i < numeros.length;i++){
   posicion = numeros[i]
   if(numeros[i]=== numeros[posicion]){
     return numeros[posicion]
   }
  }
          
}
module.exports = encontrarElementoRepetido;