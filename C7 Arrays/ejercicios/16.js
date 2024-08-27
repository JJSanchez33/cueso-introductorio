function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let  myNuevoArray=[]

      for(let i= 0; i < array.length;i++){
        if(array[i] === 0){ 
          myNuevoArray.push([i]* array[i])
        }
        else if(array[i]){
          myNuevoArray.push([i]* array[i])
            }
       }
          return myNuevoArray
}

module.exports = multiplicarElementosPorIndice;
