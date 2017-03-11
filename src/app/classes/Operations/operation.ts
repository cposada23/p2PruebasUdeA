export class Operation {


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

    roundTo2(numero:number):number{
        return Math.round(numero * 100) / 100;
    }
}
