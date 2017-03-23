import { Component, OnInit } from '@angular/core';
import { Vector } from '../classes/Vector/vector';
@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.css']
})

/**
 * Componente para calcular la regresión y los coeficientes de relación
 * entre varios vectoes numericos 
 */
export class RegressionComponent implements OnInit {
  error:string;
  vectores:Array<Vector>;
  textoBoton:string;
  select = false;
  resultado = false;
  seleccionados:Array<Vector>;
  texto = 'Seleccionados: ';
  funcion:string;
  b0:number;
  b1:number;
  r:number;
  r2:number;
  yk:number;
  xi:number;
  constructor() { 
    this.textoBoton = "Seleccionar arreglos";
    this.funcion="this.b0 + this.b1*this.xi";
  }

  ngOnInit() {
  }

  seleccion(){
    
    this.select = true;
    
  }

  seleccionar(index){
    if(!this.seleccionados){ // Se selecciona el primer vector
      this.seleccionados = new Array<Vector>();
      this.seleccionados.push(this.vectores[index]);
      this.texto += this.vectores[index].nombre;
    }
    else if (this.seleccionados.length == 1){ // Se selecciona el segundo vector: se hace la regresion
      this.seleccionados.push(this.vectores[index]);
      this.texto += " y " + this.vectores[index].nombre;
      let res = this.seleccionados[0].regresion(this.seleccionados[1]);
      this.b0 = res[0];
      this.b1 = res[1];
      this.r  = res[2];
      this.r2 = res[3];
      this.resultado = true;
    }
  }

  calcularYk(){
    console.log(eval(this.funcion));
    this.yk = eval(this.funcion);
    if(!this.yk){
      this.error = "Ingrese solo valores numéricos";
    }
  }

  reset(){
    this.texto = "Seleccionados: "
    this.seleccionados = null;
    this.resultado = false;
    this.yk = null;
    this.xi = null;
  }

  /**
   * Funcion para leer un archivo de texto desde el computador.
   * se valida desde el html que solo se acepten archivos en formato text/plain
   * 
   * @param event Evento del input cuando se selecciona un archivo
   */
  fileChanged(event) {
    this.error = null;
    let file:File = event.srcElement.files[0];
    const lector: FileReader = new FileReader();
    lector.readAsText(file);
    lector.onloadend = (e) => {
      let resultado = lector.result;
      try {
        this.validarString(resultado);  
      } catch (error) {
        this.handleError(error);
      }
      
    }
  }
  /**
   * Valida el resultado de la lectura del archivo
   * este debe tener titulo y el resto de elementos deben ser 
   * numericos
   * @param resultado a validar
   */
  validarString(resultado:string) {
    let vect = resultado.split('\n');
    let titulos = [];
    let datos = [];
    for(let i in vect){
      if(vect.hasOwnProperty(i)){
        try {
          titulos[i] = this.extraerTitulo(vect[i]);
          datos [i] = this.extraerDatos(vect[i]);
        } catch (error) {
          throw error;
        }
      }
    }

    /** 
     * Si no se ha lanzado una excepción en este
     * punto es porque ya  tengo los datos y los titulos de las columnas.
     * Procedo a crear los objetos de la clase vector 
     */

    this.crearVectores(datos, titulos);


  }

  


  crearVectores(datos:Array<number []>, titulos:Array<any>){
    let vector:Vector;
    this.vectores = new Array;
    for( let i in datos){
      if( datos.hasOwnProperty(i)) {
        vector = new Vector();
        vector.setVector(datos[i]);
        vector.nombre = titulos[i];
        this.vectores.push(vector);
      }
    }
     
  }

  /**
   * Valida que el primer elemento de la columna sea un string 
   * que contiene: título seguido del título de la columna
   * ejemplo: titulo:TituloColumna (sin tilde en título)
   * Este título no podrá ser numérico 
   * @param columna a extraer el título
   * @returns titulo: el titulo de la columna
   * @throws lanza una excepción cuando es un titulo no valido
   */
  extraerTitulo(columna:string):string{
   
    let titulo = columna.split(':')[0]; // El primer elemento es el titulo de la columna
    if(!titulo){;
      throw new Error('No hay titulo para alguna de las columnas');
    }
    return titulo;
  }

  /**
   * Extrae los datos numéricos de una columna
   * @param columna a extrar los datos numéricos
   * @returns Retorna y valida los datos numéricos que se pasen 
   *          en las columnas del archivo
   * @throws TypeError si alguno de los datos no son numéricos
   *  
   */
  extraerDatos(columna:string):Array<number>{
    let datos = columna.split(':')[1]; 
    datos = this.darFormato(datos); // Remuevo los espacios en blanco sobrantes
    let datosSplit = datos.split(' '); // Los elementos estan separados por espacios en blanco
    let datosResultantes = [];
    for( let i in datosSplit ) {
      if( datosSplit.hasOwnProperty(i) ) {
        let numero = Number( datosSplit[i] );
        if(!numero){ // Si no se pudo hacer un castin a Number se lanza la excepción
          throw new TypeError('Alguna columna contiene datos no numéricos');
        }
        datosResultantes.push(numero);
      }
    }
    return datosResultantes;
  }

  /**Remueve los espacios en blanco extras */
  darFormato(datos){
    return datos.trim().replace(/ +(?= )/g,'');
  }


  /**
   * Se encarga de mostrar el mensaje de error de una excepción 
   */
  handleError(error:Error){
    console.error(error);
    this.error = error.message;
  }
}
