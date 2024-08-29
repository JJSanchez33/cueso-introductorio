function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
    const    nuevoValor= arrayOfNumbers.reduce((a,b)=>{
         return   a+b

    },0)
     cb(nuevoValor)
}

module.exports = sumarArray;
