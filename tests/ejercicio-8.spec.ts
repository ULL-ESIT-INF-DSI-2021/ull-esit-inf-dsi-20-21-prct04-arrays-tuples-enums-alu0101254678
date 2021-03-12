import 'mocha';
import {expect} from 'chai';
import {Punto} from '../src/ejercicio-6'
import {agent} from '../src/ejercicio-8';

describe('Test que calcula un camino correcto', () => {
  let punto_1: Punto = new Punto(5, 9);
  let punto_2: Punto = new Punto(4, 8);
  let tablero_1: Punto = new Punto(10, 10);
  it('agent(punto_1: new Punto(5, 9), punto_2: new Punto(4, 8), tablero: new Punto(10, 10)) devuelve ["West", "South"]', () => {
    expect(agent(punto_1, punto_2, tablero_1)).to.have.same.members(['West', 'South']);
  });

  let punto_3: Punto = new Punto(5, 9);
  let punto_4: Punto = new Punto(4, 8);
  let tablero_2: Punto = new Punto(8, 8);
  it('agent(punto_3: new Punto(5, 9), punto_4: new Punto(4, 8), tablero: new Punto(8, 8)) devuelve un mensaje de error', () => {
    expect(agent(punto_3, punto_4, tablero_2)).to.be.a('string');
    expect(agent(punto_3, punto_4, tablero_2)).to.be.equal('Alguna de las coordenadas de los puntos es mayor que el tablero\n');
  });
});
