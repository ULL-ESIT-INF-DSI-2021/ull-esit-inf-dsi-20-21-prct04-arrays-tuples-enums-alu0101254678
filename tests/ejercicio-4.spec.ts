import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('Test que calcula si los ceros se mueven correctamente', () => {
  it("moveZeros[1, 0, 1, 2, 0, 1, 3] devuelve [1, 1, 2, 1, 3, 0, 0]", () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.have.same.members([1, 1, 2, 1, 3, 0, 0]);
  });

  it("moveZeros[0, 0, 1, 0] devuelve [1, 0, 0, 0]", () => {
    expect(moveZeros([0, 0, 1, 0])).to.have.same.members([1, 0, 0, 0]);
  });
});
