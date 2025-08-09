import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css'
})
export class EjemploPipes {
  empleados = [
    { nombre: 'Juan', sueldo: 1000.1234, fechaNacimiento: new Date(1990, 5, 23) },
    { nombre: 'Ana', sueldo: 1200.5678, fechaNacimiento: new Date(1992, 3, 15) },
    { nombre: 'Luis', sueldo: 1100.9101, fechaNacimiento: new Date(1995, 7, 30) }
  ]
}
