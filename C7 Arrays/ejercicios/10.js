function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  const myEesultado = array.find((newArray)=>{
    if(newArray.length >= 5){
       return newArray
    }
      })
        
      return myEesultado
    
      
    }


module.exports = obtenerPrimerStringLargo;
