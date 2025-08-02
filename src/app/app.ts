import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponentInline, Interpolacion, Padre, MostrarMensaje, Replicador, Saludar, ComponenteIf, AgregarTarea, ComponenteFor, ViewChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Decorador @ViewChild en Angular';
}
