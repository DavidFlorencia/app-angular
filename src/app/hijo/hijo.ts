import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  private titulo: string = 'Componente hijo';

  // Getter de typescript
  get mostrarTitulo(): string {
    return this.titulo;
  }

  getTitulo(): string {
    return this.titulo;
  }
}
