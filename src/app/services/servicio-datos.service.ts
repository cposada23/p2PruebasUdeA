import { Injectable } from '@angular/core';
@Injectable()
export class ServicioDatosService {

  constructor() { }

  getDatos(){ 
    
    let vectores = [
      [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503],
      [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    ];
    return vectores;
   
  }

  

  validaVectorNumerico(vector:Array<any>):Boolean{
     for (var i in vector){
       if(typeof(vector[i]) !== 'number'){
         return false;
       }
     }
     return true;
  }

}
