function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  const nuevoNumero= secuencia.find(( elemnt)=>{
    if( elemnt% n===0){
      return  elemnt
    }
  
     
    

 
    
})
 return nuevoNumero

     
  
}

module.exports = encontrarPrimerMultiploDeN;