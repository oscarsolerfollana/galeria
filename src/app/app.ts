import { Component } from '@angular/core';
import { Galeria } from './galeria/galeria';

// Componente raíz: solo contiene la galería
@Component({
  selector: 'app-root',
  imports: [Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
