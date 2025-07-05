import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Hola mundo desde Angular!';
}
