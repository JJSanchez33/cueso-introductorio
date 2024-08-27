function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1
 if(a < 0){
      return 0
    }
  for(a; a <= b;a++){
    producto*= a
    }
  return  producto
}

module.exports = productoEntreNúmeros;