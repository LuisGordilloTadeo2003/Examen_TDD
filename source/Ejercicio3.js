/*
3.- Debes realizar un código a partir del que vimos de Papa Noel y la función que daba la capacidad de cajas de regalos,
pero con las siguientes diferencias y que cumpla lo siguiente:
   -Debes crear una función que se llame /*distribuiteGiftTusIniciales(packOfGifts, reindeers)
que devuelva también el nº  de cajas de regalos pero en lugar de poder transportar los renos
el doble de peso, sea 4 veces según la longitud del nombre del reno.
*/
const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

export const Ejercicio3 = (packOfGifts, reindeers) => {
  let pesoPack = 0
  let cargaRenos = 0

  packOfGifts
    .forEach(element => {
      const tamaño = element.length
      pesoPack += tamaño
      return pesoPack
    })

  reindeers.forEach(element => {
    const carga = (element.length * 4)
    cargaRenos += carga
    return cargaRenos
  })
  const resultado = Math.floor(cargaRenos / pesoPack)
  return resultado
}
