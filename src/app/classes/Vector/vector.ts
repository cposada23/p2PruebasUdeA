/**
 * Clase vector 
 * En esta clase se guarda el vector ingresado por el usuario
 * ya sea por teclado o por medio de un servicio que se comunique 
 * con un servidor por medio de peticiones HTTP
 */

import { Operation } from '../Operations/operation';

export class Vector {
    
    private _vector:Array<number>;
    private _mean: number;
    private _standarDeviation: number;
    private operation:Operation;

    constructor(){
        this.operation = new Operation();
    }

    public meanFunction():number{
        return this.operation.mean(this._vector);
    }
    public standarDeviationFunction():number{
        return this.operation.standarDeviation(this._vector, this._mean);
    }

    

    public setVector(vector:Array<number>){
        this._vector = vector;
        this._mean = this.meanFunction();
        this._standarDeviation = this.standarDeviationFunction();
    }

    get mean():number{
        return this._mean;  
    }
    get standarDeviation():number{
        return this._standarDeviation;
    }
    get vector():Array<number>{
        return this._vector;
    }

    

}
