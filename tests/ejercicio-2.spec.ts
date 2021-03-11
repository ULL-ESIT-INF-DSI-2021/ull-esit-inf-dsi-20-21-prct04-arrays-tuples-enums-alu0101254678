import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

describe('Test que calcula la encadenacion de caracteres', () => {
  it('meshArray(["allow", "lowering", "ringmaster"]) devuelve lowring', () => {
    expect(meshArray(["allow", "lowring", "ringmaster"])).to.equal('lowring');
  });
});
