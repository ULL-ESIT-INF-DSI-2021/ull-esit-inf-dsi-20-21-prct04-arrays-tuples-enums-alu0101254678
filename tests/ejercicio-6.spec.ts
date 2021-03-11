import 'mocha';
import {expect} from 'chai';
import {Punto} from '../src/ejercicio-6';

describe('Test que calcula los metodos de la clase punto', () => {
  it('Se crea correctamente un punto', () => {
    let punto_1: Punto = new Punto(1, 1);
    expect(punto_1).to.not.be.null;
    expect(punto_1.coordenada_X).to.be.equal(1);
    expect(punto_1.coordenada_Y).to.be.equal(1);
    expect(punto_1.coordenada_Y).not.equal(2);
  });

  it('Se hace la suma correctamente de puntos', () => {
    let punto_1: Punto = new Punto(1, 1);
    let punto_2: Punto = new Punto(2, 3);
    expect(punto_1.sum_Puntos(punto_2).coordenada_X).to.be.equal(3);
    expect(punto_1.sum_Puntos(punto_2).coordenada_Y).to.be.equal(4);
  });

  it('Se hace la resta correctamente de puntos', () => {
    let punto_1: Punto = new Punto(1, 1);
    let punto_2: Punto = new Punto(2, 3);
    expect(punto_2.res_Puntos(punto_1).coordenada_X).to.be.equal(1);
    expect(punto_2.res_Puntos(punto_1).coordenada_Y).to.be.equal(2);
  });

  it('Se hace el producto cartesiano correctamente', () => {
    let punto_2: Punto = new Punto(2, 3);
    expect(punto_2.prod_Escalar(2)).to.be.equal(10);
  });

  it('Se hace el producto cartesiano correctamente', () => {
    let punto_2: Punto = new Punto(2, 3);
    expect(punto_2.prod_Escalar(2)).to.be.equal(10);
  });

  it('Se calcula la distancia euclidea correctamente', () => {
    let punto_1: Punto = new Punto(10, 10);
    let punto_2: Punto = new Punto(10, 11);
    expect(punto_2.dist_Eucl(punto_1)).to.be.equal(1);

    let punto_3: Punto = new Punto(2, 6);
    let punto_4: Punto = new Punto(2, 4);
    expect(punto_4.dist_Eucl(punto_3)).to.be.equal(2);
    expect(punto_4.dist_Eucl(punto_3)).not.to.be.equal(0);
  });
});
