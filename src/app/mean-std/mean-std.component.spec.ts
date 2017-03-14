import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule}  from '@angular/http';
import { MeanStdComponent } from './mean-std.component';
import {ServicioDatosService } from '../services/servicio-datos.service';
import { Http } from '@angular/http';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
describe('MeanStdComponent', () => {
  let component: MeanStdComponent;
  let fixture: ComponentFixture<MeanStdComponent>;
  let servicioDatos:ServicioDatosService;
  let de:DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,BrowserModule],
      declarations: [ MeanStdComponent ],
      providers:[ServicioDatosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanStdComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    servicioDatos = TestBed.get(ServicioDatosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('debe dar formato valido a un string para convertirlo en un vector', ()=>{
    let datos = "1 2 3     4 5      6";
    expect(component.darFormato(datos)).toBe("1 2 3 4 5 6");
  });

  it('debe arrojar un error cuando el vector no es numerico', ()=>{
    let datos = "1 2 3 4.5  a  5 6";
    expect(function(){ component.validarDatos(datos)}).toThrow(new TypeError('El vector no es numerico'));
  });

  it('debe arrojar un error cuando se ingresa datos vacios []', ()=>{
    let datos = " ";
    expect(function(){ component.validarDatos(datos)}).toThrow(new TypeError('El vector no es numerico'))
  });

  it('debe retornar un arreglo numerico cuando los datos son todos numeros',()=>{
    let datos = "1 2 3 4 5 6 6  6";
    expect(component.validarDatos(datos)).toEqual([ 1, 2, 3, 4, 5, 6, 6, 6 ]);
  });

  it('debe mostrar un mensaje de error cuando se ingresan datos no numericos', ()=>{
    component.numeros = "1 a 2 ";
    component.ingresoDatos();
    expect(component.mensaje).toBe('Datos invalidos');
  });
});
