function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
    const nuevoarray =  arrayOfStrings.filter((element)=>{
       if(element[0] === "a"){
         return element
       }
    })
     return  nuevoarray
}

module.exports = filter;
