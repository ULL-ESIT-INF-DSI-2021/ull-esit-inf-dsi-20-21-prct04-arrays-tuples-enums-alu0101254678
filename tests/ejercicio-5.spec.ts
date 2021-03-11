import 'mocha';
import {expect} from 'chai';
import {escalar} from '../src/ejercicio-5';
import {multiplyAll} from '../src/ejercicio-5';

describe('Test que calcula la multiplicacion de un escalar por un vector', () => {
  it("escalar([2, 6, 8], 3)) devuelve [6, 18, 24]", () => {
    expect(multiplyAll([2, 6, 8], 3)).to.have.same.members([6, 18, 24]);
  });
  it("escalar([1, 2, 3, 4, 5, 6], 2)) devuelve [2, 4, 6, 8, 10, 12]", () => {
    expect(multiplyAll([1, 2, 3, 4, 5, 6], 2)).to.have.same.members([2, 4, 6, 8, 10, 12]);
  });
});
