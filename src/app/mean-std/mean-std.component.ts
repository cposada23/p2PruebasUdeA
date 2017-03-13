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
    let vectores = [[1,2,3,343,346,565,2,3434,65,63,12343,423],
                    [423,232,236,21312,23213,23,213,23,23,232345,78712],
                    [2354,13,787,43,456,34,7657,234,6575,24,7666,24]];
    for(let i in vectores){
      let vec = new Vector();
      vec.setVector(vectores[i]);
      this.vectores.push(vec);
    }
    this.vector = this.vectores[0];
  }

  seleccionarVector(vector){
    this.vector = vector;
  }


}
