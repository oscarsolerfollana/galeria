import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Foto } from '../foto';

// Componente que muestra una foto ampliada encima de la galería
@Component({
  selector: 'app-visor',
  imports: [],
  templateUrl: './visor.html',
  styleUrl: './visor.css'
})
export class Visor {
  @Input() foto!: Foto;
  @Input() posicion = 1;
  @Input() total = 1;

  @Output() cerrar = new EventEmitter<void>();
  @Output() siguiente = new EventEmitter<void>();
  @Output() anterior = new EventEmitter<void>();
}
