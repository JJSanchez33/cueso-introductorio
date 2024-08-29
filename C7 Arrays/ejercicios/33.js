function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let fraceIntecalada= "";
let  indexStr1=0;
let indexStr2=0;
let indexStr3=0;
 while(indexStr1 < str1.length || indexStr2 < str2.length || indexStr3 < str3.length){
       if(indexStr1 < str1.length){
        fraceIntecalada += str1[indexStr1]
        indexStr1++
       } if(indexStr2 < str2.length){
         fraceIntecalada += str2[indexStr2]
         indexStr2++
       }
        if(indexStr3 < str3.length){
         fraceIntecalada += str3[indexStr3]
         indexStr3++
       }
 }
 return fraceIntecalada
}

module.exports = combine;