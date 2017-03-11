import { Component, OnInit } from '@angular/core';
import { Vector } from '../classes/Vector/vector';
@Component({
  selector: 'app-mean-std',
  templateUrl: './mean-std.component.html',
  styleUrls: ['./mean-std.component.css']
})
export class MeanStdComponent implements OnInit {
  nombre:string = 'ceballos'; 
  vector: Vector;
  vectores:Array<Vector> = [];
  
  constructor() { }

  ngOnInit() {
    this.cargarVector();
  }

  cargarVector(){
    let vectores = [[1,2,3],[4,5,6]];
    for(let i in vectores){
      let vec = new Vector();
      vec.setVector(vectores[i]);
      this.vectores.push(vec);
    }
    
  }

  seleccionarVector(vector){
    this.vector = vector;
  }
  

}
