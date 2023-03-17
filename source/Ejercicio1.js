/*
1.- Debes realizar un código tipo "fizzbuzz" pero con las especificaciones siguientes:
   -Si es múltiplo de 2 muestra tu nombre
   -Si es múltiplo de 3 muestra tu primer apellido
   -Si es múltiplo de 11 muestra tu segundo apellido
*/

export const Ejercicio1 = (number) => {
  if (typeof number !== 'number') throw new Error('paramater provided must be a number')
  if (Number.isNaN(number)) throw new Error('paramater provided must be a number')

  const multiplies = { 2: 'Luis', 3: 'Gordillo', 11: 'Tadeo' }
  let output = ''
  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })
  return output === '' ? number : output
}
