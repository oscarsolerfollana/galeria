import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Foto } from '../foto';

// Componente que representa una sola foto de la galería
@Component({
  selector: 'app-tarjeta-foto',
  imports: [NgClass],
  templateUrl: './tarjeta-foto.html',
  styleUrl: './tarjeta-foto.css'
})
export class TarjetaFoto {
  // La foto llega desde el componente galería
  @Input() foto!: Foto;

  // Avisos que se mandan al componente galería
  @Output() abrir = new EventEmitter<Foto>();
  @Output() favorita = new EventEmitter<Foto>();

  // Clase CSS según la categoría, para pintar la etiqueta de un color distinto
  claseCategoria(): string {
    if (this.foto.categoria === 'Espacio') {
      return 'espacio';
    } else if (this.foto.categoria === 'Ciencia') {
      return 'ciencia';
    } else if (this.foto.categoria === 'Vida cotidiana') {
      return 'cotidiana';
    }
    return 'naturaleza';
  }
}
