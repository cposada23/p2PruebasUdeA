/**
 * Clase vector 
 * En esta clase se guarda el vector ingresado por el usuario
 * ya sea por teclado o por medio de un servicio que se comunique 
 * con un servidor por medio de peticiones HTTP
 */

import { Operation } from '../Operations/operation';

export class Vector {
    
    private _vector:Array<number>;
    private _vectorAlCuadrado:Array<number>;
    private _sumaElementos:number;
    private _sumaElementosAlCuadrado: number;
    private _mean: number;
    private _standarDeviation: number;
    private operation:Operation;
    private _nombre: string;

    constructor(){
        this.operation = new Operation();
        this._nombre = "null";
    }

    public meanFunction():number{
        return this.operation.mean(this._vector);
    }
    public standarDeviationFunction():number{
        return this.operation.standarDeviation(this._vector, this._mean);
    }


    public setVector(vector:Array<number>){
        this._vector = vector;
        this._vectorAlCuadrado = this.setVectorAlCuadrado(vector);
        this._sumaElementosAlCuadrado = this.setSumaElementosAlCuadrado(this._vectorAlCuadrado);
        this._sumaElementos = this.setSumaElementos(vector);
        this._mean = this.meanFunction();
        this._standarDeviation = this.standarDeviationFunction();
    }

    private setSumaElementos(vector:Array<number>):number{
        let suma = vector.reduce((a,b)=>{
            return a + b;
        });
        return suma;
    }
    private setSumaElementosAlCuadrado(vector:Array<number>):number{
        let suma = vector.reduce((a,b)=>{
            return a + b;
        });
        return suma;
    }

    private setVectorAlCuadrado(vector:Array<number>):Array<number>{
        let vectorCuadraro = vector.map((x) => {
            return x * x;
        });
        return vectorCuadraro;
    }

    public regresion(vector:Vector):Array<number>{
        let resultado = this.operation.calculateRegresionParameters(this._vector, this._sumaElementos, this._mean, this._sumaElementosAlCuadrado, vector.vector, vector.sumaElementos, vector.mean,vector.sumaElementosAlCuadrado )
        console.log("resultado ", resultado);
        return resultado;
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

    get sumaElementos():number{
        return this._sumaElementos;
    }

    get sumaElementosAlCuadrado():number{
        return this._sumaElementosAlCuadrado;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre; 
    }

    get vectorAlCuadrado():Array<number>{
        return this._vectorAlCuadrado;
    }

    

}
