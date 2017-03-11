import {  async } from '@angular/core/testing';

import { Operation } from './operation';

describe('AppComponent', () => {
    var op:Operation;
  beforeEach(async(() => {
      op = new Operation();
  }));
      
 

  it('Debe calcular la media de un arreglo numerico',()=>{
      var arr = [3,4,5];
      expect(op.mean(arr)).toBe(4);
  });

  it('Debe devolver NaN cuando el vector se pasa vacio []', ()=>{
      var arr = [];
      expect(op.mean(arr)).toBeNaN();
  });

  it('Debe calcular la desviacion Estandar pasando la media del vector', ()=>{
    var arr = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    var media = op.mean(arr);
    var desviacionStandar = op.standarDeviation(arr, media);
    expect(media).toBe(550.6);
    expect(desviacionStandar).toBe(572.03);
  });

  /*t('debe devolver un error cuando el arreglo no es numerico',()=>{
      var arr = ['a', 'b', 1];
      //var media = op.mean(arr);
  });*/

  /*it('Debe devolver NaN cuando alguno de los numeros del arreglo supera el limite permitido (15)', ()=>{
      var arr = [1234567890123456, 1234567876543212345676543234567654323456, ];
      var media = op.mean(arr);
      console.log("Media " , media);
      expect(media.toFixed()).toBe(NaN.toFixed());
  })*/

  
});