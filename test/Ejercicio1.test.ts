import { describe, expect, it } from 'vitest'
import { Ejercicio1 } from '../source/Ejercicio1'

describe('Ejercicio1', () : void => {
  /*
  it('Should be a function',()=>{
   expect(typeof Ejercicio1).toBe('function')
  })
  test redundante por eso lo quitamos
  */
  it('Should throw if not number is provided as parameter', () => {
    expect(() => Ejercicio1()).toThrow()
  })
  it('Should throw a specific error message if not number is provided as parameter', () => {
    expect(() => Ejercicio1()).toThrow('paramater provided must be a number')
  })
  it('Should throw a specific error message  if not number is provided', () => {
    expect(() => Ejercicio1(NaN)).toThrow('paramater provided must be a number')
  })
  it('should return 1 if number provided is 1', () => {
    expect(Ejercicio1(1)).toBe(1)
  })
  it('should return Luis if number provided is multiple of 2', () => {
    expect(Ejercicio1(4)).toBe('Luis')
    expect(Ejercicio1(8)).toBe('Luis')
    expect(Ejercicio1(10)).toBe('Luis')
  })
  it('should return Gordillo if number provided is multiple of 3', () => {
    expect(Ejercicio1(9)).toBe('Gordillo')
    expect(Ejercicio1(15)).toBe('Gordillo')
    expect(Ejercicio1(21)).toBe('Gordillo')
  }) 
  it('should return LuisGordillo if number provided is multiple of 6', () => {
    expect(Ejercicio1(6)).toBe('LuisGordillo')
    expect(Ejercicio1(12)).toBe('LuisGordillo')
    expect(Ejercicio1(18)).toBe('LuisGordillo')
  })
  it('should return 5 if number provided is 5', () => {
    expect(Ejercicio1(5)).toBe(5)
  })
  it('should return Tadeo if number provided is 11', () => {
    expect(Ejercicio1(11)).toBe('Tadeo')
  })
  /*
  it('should return Tadeo if number provided is multiple of 11', () => {
    expect(Ejercicio1(22)).toBe('Tadeo')
    expect(Ejercicio1(33)).toBe('Tadeo')
    expect(Ejercicio1(44)).toBe('Tadeo')
  })
  */
  it('should return GordilloTadeo if number provided is multiple of 33', () => {
    expect(Ejercicio1(33)).toBe('GordilloTadeo')
    //expect(Ejercicio1(66)).toBe('GordilloTadeo')
    expect(Ejercicio1(99)).toBe('GordilloTadeo')
  })
  it('should return LuisTadeo if number provided is multiple of 22', () => {
    expect(Ejercicio1(22)).toBe('LuisTadeo')
    expect(Ejercicio1(44)).toBe('LuisTadeo')
    //expect(Ejercicio1(66)).toBe('LuisTadeo')
  })
  it('should return LuisGordilloTadeo if number provided is multiple of 66', () => {
    expect(Ejercicio1(66)).toBe('LuisGordilloTadeo')
    expect(Ejercicio1(132)).toBe('LuisGordilloTadeo')
    expect(Ejercicio1(198)).toBe('LuisGordilloTadeo')
  })
})