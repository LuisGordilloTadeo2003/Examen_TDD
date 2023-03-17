/* 2.-
Debes realizar un código que realice una transformación de un string a otro que cumpla exclusivamente con las siguientes condiciones:
   -Debe devolver un boleano true o false
   -Debe tener el mismo numero de letras; ej: ab -->def
   -Debe tener el mismo numero de letras diferentes (únicas); ej: abb -->abc
*/
export const Ejercicio2 = (from, to) => {
  //  if(from == undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false
    transformations[fromLetter] = toLetter
  }

  return true
}
