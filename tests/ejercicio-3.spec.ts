import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-3';

describe('Test que calcula la media y la concatenación de una cadena de numeros y string', () =>{
  it("meanAndConcatenate(['h', 'o', 'l', 'a', 1, 2, 3]) devuelve [2, 'hola']", () => {
    expect(meanAndConcatenate(['h', 'o', 'l', 'a', 1, 2, 3])).to.have.same.members([2, 'hola']);
  });
  it("meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 0, 2, 'x']) devuelve [4, 'udiwstagwox']", () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 0, 2, 'x'])).to.have.same.members([4, 'udiwstagwox']);
  });
});
