function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const reducelaoperacion= resultadosTest.reduce((elemen,iten)=>{
    return  elemen + iten
},0)

for(let i= 0; i< resultadosTest.length;i++){
  return  reducelaoperacion/resultadosTest.length
}
}

module.exports = promedioResultadosTest;
