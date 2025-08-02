import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css'
})
export class ViewChildComponent {
  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
    if (this.inputElemento) {
      this.inputElemento.nativeElement.value = 'Texto cambiado desde ViewChild';
    }
  }
}
