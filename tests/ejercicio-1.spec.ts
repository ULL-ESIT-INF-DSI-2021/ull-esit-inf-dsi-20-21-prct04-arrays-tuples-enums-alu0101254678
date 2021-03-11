import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Test que calcula las resistencias', () => {
  it('decodeResistor("negro", "marron") devuelve [0,1]', () => {
    expect(decodeResistor(["negro", "marron"])).to.have.same.members([0, 1]);
  });
  it('decodeResistor("hola") devuelve -1', () => {
    expect(decodeResistor(["hola"])).to.be.equal(-1);
  });
});
