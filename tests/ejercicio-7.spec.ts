import 'mocha';
import {expect} from 'chai';
import {Punto_General} from '../src/ejercicio-7';

describe('Test que calcula los metodos de la clase punto general', () => {
  it('Se crea correctamente un punto de forma general', () => {
    let punto_1: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
    expect(punto_1).to.not.be.null;
    expect(punto_1.coordenada_X).to.be.equal(1);
    expect(punto_1.coordenada_Y).to.be.equal(2);
    expect(punto_1.coordenada_Z).to.be.equal(3);
    expect(punto_1.dimensiones).to.be.equal(5);
    expect(punto_1.vector_coor_d).not.to.have.same.members([0, 1]);
    expect(punto_1.vector_coor_d).to.have.same.members([1, 2]);
  });

  it('Se hace la suma correctamente de puntos generales', () => {
    let punto_1: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
    let punto_2: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
    expect(punto_1.sum_puntos(punto_2).coordenada_X).to.be.equal(2);
    expect(punto_1.sum_puntos(punto_2).coordenada_Y).to.be.equal(4);
    expect(punto_1.sum_puntos(punto_2).coordenada_Z).to.be.equal(6);
    expect(punto_1.sum_puntos(punto_2).dimensiones).to.be.equal(5);
    expect(punto_1.sum_puntos(punto_2).vector_coor_d).to.have.same.members([2, 4]);
  });

  it('Se hace la resta correctamente de puntos generales', () => {
    let punto_1: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
    let punto_2: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
    expect(punto_2.res_puntos(punto_1).coordenada_X).to.be.equal(0);
    expect(punto_2.res_puntos(punto_1).coordenada_Y).to.be.equal(0);
    expect(punto_2.res_puntos(punto_1).coordenada_Z).to.be.equal(0);
    expect(punto_2.res_puntos(punto_1).dimensiones).to.be.equal(5);
    expect(punto_2.res_puntos(punto_1).vector_coor_d).to.have.same.members([0, 0]);
  });

  it('Se hace el producto cartesiano correctamente', () => {
    let punto: Punto_General = new Punto_General(20, 40, 60, 6, [80, 100, 120]);
    expect(punto.prod_escalar(10)).to.be.equal(4200);
  });
});
