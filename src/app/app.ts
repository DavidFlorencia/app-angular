import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponentInline } from "./component-inline/component-inline";
import { Interpolacion } from "./interpolacion/interpolacion";
import { Padre } from "./padre/padre";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponentInline, Interpolacion, Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Universidad Angular';
}
