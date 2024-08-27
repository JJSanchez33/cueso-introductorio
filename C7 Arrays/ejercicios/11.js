function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  const nuevoArray = array.map((multipica)=>{
    return  multipica *2
  })
   return nuevoArray
}

module.exports = duplicarElementos;
