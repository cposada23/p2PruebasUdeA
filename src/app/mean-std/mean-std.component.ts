import { Component, OnInit } from '@angular/core';
import { Vector } from '../classes/Vector/vector';

import {ServicioDatosService } from '../services/servicio-datos.service';
@Component({
  selector: 'app-mean-std',
  templateUrl: './mean-std.component.html',
  styleUrls: ['./mean-std.component.css']
})
export class MeanStdComponent implements OnInit {
  vector: Vector;
  vectores:Array<Vector> = [];
  vectorNumeros:Array<number>;
  num:number = 1;
  data:any;
  ingreso:boolean = false;
  numeros:any;
  error:boolean = false;
  mensaje:string = '';
  file:File;
  constructor(private datosService:ServicioDatosService) {
    
  }

  ngOnInit() {
    this.cargarVector();
  }

  cargarVector() {
    let data = this.datosService.getDatos();
    this.data = this.datosService.getDatos();
    console.log("data", data);

   for(let i in data) {
       let vec = new Vector();
       vec.setVector(data[i]);
       this.vectores.push(vec);
    }
    this.vector = this.vectores[0];
    this.num = 1;
  }

  fileChanged(event) {
    console.log(event.srcElement.files);
    this.file = event.srcElement.files[0];
    console.log("this.file", this.file);
    var lector: FileReader = new FileReader();
    lector.readAsText(this.file);

    lector.onloadend = (e) => {
      console.log("hoglgahg");
      console.log(lector.result);
      var resultado = lector.result;
      var vect = resultado.split('\n');
      console.log("vector ", vect);
    }

    /*this.nombreArchivo = this.file.name;
    if(this.file.size>this.maxSize){
      console.log("el archivo exede el tamaño maximo de 5 Megabytes");
      this.showPrompt('El archivo seleccionado excede el tamaño máximo de 5 Megabytes', 0);
      this.file = null;
      this.nombreArchivo = "";
    }*/
  }

  seleccionarVector(vector, i ){
    this.vector = vector;
    this.num = i;
  }

  ingresoDatos(){
    try {
      this.vectorNumeros = this.validarDatos(this.numeros);
      let vec = new Vector();
      vec.setVector(this.vectorNumeros);
      this.vectores.push(vec);
      this.vector = this.vectores[this.vectores.length - 1];
      this.num = this.vectores.length;
      this.error = false;
      this.mensaje = '';
      this.ingreso = false;
      this.numeros = '';
    } catch (error) {
      console.error(error); 
      this.error = true;
      this.mensaje = 'Datos invalidos';
    }
  }

  /**Remueve los espacios en blanco extras */
  darFormato(datos){
    return datos.trim().replace(/ +(?= )/g,'');
  }

  /**
   * Metodo para validar los datos que es ingresan en el input
   * retorna verdadero si todos los datos son numericos
   * arroja una excepcióm si alguno de los datos no es de tipo numerico
   * @param datos a ser validados
   */
  validarDatos(datos:string):Array<number>{
    console.log(datos);
    if(datos === ""){
      throw new Error('Ingrese elementos');
    }
    datos = this.darFormato(datos);
    let vector = datos.split(' ');
    console.log("daatos.length ", vector.length);
    
    let resultado = [];
    for( var i in vector){
      var numero = Number(vector[i]);
      if(!numero){
        throw new TypeError ('El vector no es numerico');
      }
      resultado.push(numero);
    }
    return resultado;
  }
}
