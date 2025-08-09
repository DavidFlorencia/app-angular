import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mensaje {
  private mensaje: string = 'Hola desde el servicio de Mensaje';

  constructor() { }

  obtenerMensaje(): string {
    return this.mensaje;
  }
}
