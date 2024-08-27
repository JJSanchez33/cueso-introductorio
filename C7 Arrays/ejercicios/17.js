function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const  reduceArray = arrayOfNums.reduce((elemento,item)=>{
          
    return elemento + item
},0)
return  reduceArray
}

module.exports = agregarNumeros;
