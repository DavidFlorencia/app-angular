import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponentInline } from "./component-inline/component-inline";
import { Interpolacion } from "./interpolacion/interpolacion";
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponentInline, Interpolacion, Padre, Hijo, MostrarMensaje, Replicador, Saludar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Two Way Binding en Angular';
}
