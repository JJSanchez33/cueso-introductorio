function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  let primeraletranumero;
                switch (numero) {
                
                  case 1:
                      numero = "lunes"
                     primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    case 2:
                      numero = "martes"
                      primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    case 3:
                      numero = "miercoles"
                      primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    case 4:
                      numero = "jueves"
                      primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    case 5:
                      numero = "viernes"
                      primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    case 6:
                      numero = "sabado"
                      primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    case 7:
                      numero = "domingo"
                      primeraletranumero= numero.at(0).toUpperCase()+ numero.substring(1)
                   
                    return   primeraletranumero
                    
                  
                
                  default:
                    return "No es un dia de la semana"
                }

}

module.exports = obtenerDiaSemana;