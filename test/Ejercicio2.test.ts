import { describe,expect,it } from "vitest";
import { Ejercicio2 } from "../source/Ejercicio2";

describe('Ejercicio2', () : void =>{
   
    it('should return a boolean',()=>{
        expect(Ejercicio2('a','b')).toBeTypeOf('boolean')
    })
    it('should return a false if strings provided have different length',()=>{
        expect(Ejercicio2('abc','de')).toBe(false)
    })
    it('should return false if strings provided have different length even with unique letters',()=>{
        expect(Ejercicio2('aab','ab')).toBe(false)
    })
    it('should return false if strings provided have different number of unique letters',()=>{
        expect(Ejercicio2('abc','ddd')).toBe(false)
    })
   
})
