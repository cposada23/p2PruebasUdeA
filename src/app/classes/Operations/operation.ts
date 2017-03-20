
/**
 * Clase para operaciones con vectores 
 * Media
 * Desviacion estandar
 * Parametros de regresion 
 * 
 * @author Camilo Posada Angel <cposadaa@gmail.com>
 */
export class Operation {

    /**
     * Calcula la media de un vector numerico
     * @param vector a calcular la media
     * @returns media Media del vector
     */
    mean(vector:Array<number>):number{
        if(vector.length === 0){
            return NaN;
        }
        var sum = vector.reduce((a,b)=>{
            return a+b;
        });
        var media = sum/vector.length;  //excepciones aritmeticas 
        //media = Math.round(media*100)/100; //se redondea a dos decimales.
        media = this.roundTo2(media);
        return media;
    }


    /**
     * Calcula la desviacion estandar de un vector numerico dada su media
     * @param vector a calcular la desviacion estandar
     * @param media del vector
     * @returns desviacion Desviacion estandar del vector
     */
    standarDeviation(vector:Array<number>, media:number):number{
        if(vector.length === 0){
            return NaN;
        }
        var sumaCuadrados:number = 0;
        var arregloCuadrados: Array<number> = [];
        var desviacion = 0;
        arregloCuadrados = vector.map((num)=>{
            return Math.pow(num-media,2);
        });
        sumaCuadrados = arregloCuadrados.reduce((a,b)=>{
        return a+b;
        });
        desviacion = Math.sqrt(sumaCuadrados  / (vector.length -1));
        //desviacion = Math.round(desviacion * 100) / 100;
        desviacion = this.roundTo2(desviacion);
        return desviacion; 
    }

    /**
     * 
     * @param x vector x  a calcular la relacion con y
     * @param xavg media del vector x
     * @param sumXCuadrado suma de los elementos al cuadrado del vector x
     * @param y vector y a calcular la relacion con x
     * @param yavg media del vector y
     * @param sumYCuadrado suma de los elementos al cuadrado del vector y
     * @returns vector con los parametros de regresion [0] -> B1, [1] -> B2
     */
    calculateRegresionParameters(x:Array<number>, xSuma:number, xavg: number, sumXCuadrado:number, y:Array<number>, ySuma:number, yavg:number, sumYCuadrado:number ):Array<number>{
        let sumatoria = this.calcularSumAxB(x,y); 
        console.log("Sumatoria " , sumatoria);
        let n = x.length;
        let b1 = ( sumatoria - ( n * xavg * yavg ) ) / ( sumXCuadrado - (n * (xavg * xavg)));
        let b0 = yavg - ( b1 * xavg );
        let arriba = ( ( n * sumatoria ) - ( xSuma * ySuma )); // La parte de arriba de la formula
        let abajo = (( n * sumXCuadrado ) - ( xSuma * xSuma )) * ( ( n * sumYCuadrado ) - ( ySuma * ySuma ) ); // La parte de abajo sin la raiz
        abajo = Math.sqrt(abajo);
        let r = arriba / abajo;
        return [b0, b1, r, r*r];
    }


    /**
     * Retorna la suma de multiplicar a[i] * b[i]
     * @param a vector
     * @param b vector
     */
    calcularSumAxB(a:Array<number>, b:Array<number>): number{
        if(a.length !== b.length){
            throw new Error('Los vectores deben tener el mismo numero de elementos');
        }
        let suma = 0;
        for ( let i in a ) {
            suma += a[i]*b[i];
        }
        return suma;
    }

    /**
     * Redonde un numero a dos decimales
     * @param numero a redondear
     */
    roundTo2(numero:number):number{
        return Math.round(numero * 100) / 100;
    }


}
