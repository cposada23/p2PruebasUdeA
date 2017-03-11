import { TestBed, async } from '@angular/core/testing';

import { Vector } from './vector';

describe('AppComponent', () => {
    var lista:Vector;
  beforeEach(async(() => {
      lista = new Vector();
  }));
      
 

  it('Debe agregar un vector por medio del set',()=>{
      var arr = [1,2,3];
      lista.setVector(arr);
      var vector = lista.vector;
      expect(vector).toBeDefined();
  });

  it('Deberian la media, desviacion y el vector estar definidos luego de hacer un set al vector', ()=>{
    var arr = [1,2,3];
    lista.setVector(arr);
    var vector = lista.vector;
    expect(vector).toBeDefined();
    expect(lista.mean).toBeDefined();
    expect(lista.standarDeviation).toBeDefined();
  });

  it('Debe calcular la media del vector', ()=>{
      var arr = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
      lista.setVector(arr);
      var media = lista.mean;
      expect(lista.vector).toBeDefined();
      expect(media).toBe(550.6);
  });
  it('Debe devolver NaN cuado el vector es vacio', ()=>{
      var arr = [];
      lista.setVector(arr);
      var media = lista.mean;
      expect(lista.vector).toBeDefined();
      expect(media).toBeNaN();
  });
  it('Debe calcular la desviacion Estandar', ()=>{
    var arr = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    lista.setVector(arr);
    var desviacionStandar = lista.standarDeviation;

    expect(lista.vector).toBeDefined();
    expect(lista.mean).toBeDefined();
    expect(lista.mean).toBe(550.6);
    expect(desviacionStandar).toBe(572.03);
  });
});
