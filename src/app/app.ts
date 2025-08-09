import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponentInline } from "./component-inline/component-inline";
import { Interpolacion } from "./interpolacion/interpolacion";
import { Padre } from "./padre/padre";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";
import { ViewChildComponent } from "./view-child/view-child";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";
import { EjemploPipes } from "./ejemplo-pipes/ejemplo-pipes";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Registrar los datos de localizacion para español mexicano
registerLocaleData(localeEs, 'es-MX');

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponentInline, Interpolacion, Padre, MostrarMensaje, Replicador, Saludar, ComponenteIf, AgregarTarea, ComponenteFor, ViewChildComponent, ListadoUsuarios, EjemploPipes],
  providers: [{provide: LOCALE_ID, useValue: 'es-MX'}, Mensaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Pipes en Angular';

  mensaje: string;

  constructor(private mensajeService: Mensaje) {
    this.mensaje = this.mensajeService.obtenerMensaje();
  }
}
