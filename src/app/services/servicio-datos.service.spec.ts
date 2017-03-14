import { TestBed, inject } from '@angular/core/testing';

import { ServicioDatosService } from './servicio-datos.service';

describe('ServicioDatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDatosService]
    });
  });

  

  it('should ...', inject([ServicioDatosService], (service: ServicioDatosService) => {
    expect(service).toBeTruthy();
  }));

  it('debe retornar falso cuando no es un vector numerico', inject([ServicioDatosService], (service: ServicioDatosService) =>{
    let arreglo = [1,2,"a"];
    expect(service.validaVectorNumerico(arreglo)).toBeFalsy();
  }));
});
