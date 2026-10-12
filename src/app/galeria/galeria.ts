import { Component } from '@angular/core';
import { Foto } from '../foto';
import { TarjetaFoto } from '../tarjeta-foto/tarjeta-foto';
import { Visor } from '../visor/visor';

// Componente principal. Tiene las fotos, los filtros y la foto que está abierta.
@Component({
  selector: 'app-galeria',
  imports: [TarjetaFoto, Visor],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {

  // Las fotos se cargan desde este array, no desde el HTML
  fotos: Foto[] = [
    {
      id: 1, titulo: 'Astronauta', categoria: 'Espacio', archivo: 'astronauta.jpg',
      descripcion: 'Retrato oficial de Eileen Collins, la primera mujer que pilotó y comandó un transbordador espacial.',
      autor: 'NASA (dominio público)', favorita: false
    },
    {
      id: 2, titulo: 'Despegue de un cohete', categoria: 'Espacio', archivo: 'cohete.jpg',
      descripcion: 'Lanzamiento de un cohete Falcon 9 desde Cabo Cañaveral.',
      autor: 'SpaceX (dominio público)', favorita: false
    },
    {
      id: 3, titulo: 'Campo profundo del Hubble', categoria: 'Espacio', archivo: 'hubble.jpg',
      descripcion: 'Casi todos los puntos de luz de esta imagen son galaxias lejanas, no estrellas.',
      autor: 'NASA / ESA (dominio público)', favorita: false
    },
    {
      id: 4, titulo: 'Tejido al microscopio', categoria: 'Ciencia', archivo: 'tejido.jpg',
      descripcion: 'Muestra de tejido teñida con inmunohistoquímica para ver mejor las células.',
      autor: 'Imagen de muestra de scikit-image (dominio público)', favorita: false
    },
    {
      id: 5, titulo: 'Fondo de ojo', categoria: 'Ciencia', archivo: 'retina.jpg',
      descripcion: 'Fotografía de la retina humana, con el nervio óptico y los vasos sanguíneos.',
      autor: 'Mikael Häggström (CC0)', favorita: false
    },
    {
      id: 6, titulo: 'Grace Hopper', categoria: 'Ciencia', archivo: 'grace-hopper.jpg',
      descripcion: 'Pionera de la informática y una de las creadoras del lenguaje COBOL.',
      autor: 'US Navy (dominio público)', favorita: false
    },
    {
      id: 7, titulo: 'Chelsea, la gata', categoria: 'Vida cotidiana', archivo: 'gata.jpg',
      descripcion: 'Una gata atigrada mirando a cámara con bastante desconfianza.',
      autor: 'Stefan van der Walt (CC0)', favorita: false
    },
    {
      id: 8, titulo: 'Taza de café', categoria: 'Vida cotidiana', archivo: 'cafe.jpg',
      descripcion: 'Un café con leche visto desde arriba. Imprescindible para programar.',
      autor: 'Rachel Michetti (CC0)', favorita: false
    },
    {
      id: 9, titulo: 'Templo en China', categoria: 'Naturaleza y lugares', archivo: 'templo.jpg',
      descripcion: 'Pagoda de estilo tradicional rodeada de árboles.',
      autor: 'danielbuechele en Flickr (CC BY 2.0)', favorita: false
    },
    {
      id: 10, titulo: 'Flor', categoria: 'Naturaleza y lugares', archivo: 'flor.jpg',
      descripcion: 'Primer plano de una flor con los pétalos abiertos.',
      autor: 'vultilion en Flickr (CC BY 2.0)', favorita: false
    }
  ];

  categorias: string[] = ['Todas', 'Espacio', 'Ciencia', 'Vida cotidiana', 'Naturaleza y lugares'];
  categoriaElegida = 'Todas';
  soloFavoritas = false;

  // Foto que se ve en grande (null si el visor está cerrado)
  fotoAbierta: Foto | null = null;

  // Devuelve las fotos que hay que mostrar según los filtros
  fotosVisibles(): Foto[] {
    let resultado: Foto[] = [];
    for (let i = 0; i < this.fotos.length; i++) {
      let foto = this.fotos[i];
      let cumpleCategoria = this.categoriaElegida === 'Todas' || foto.categoria === this.categoriaElegida;
      let cumpleFavorita = !this.soloFavoritas || foto.favorita;
      if (cumpleCategoria && cumpleFavorita) {
        resultado.push(foto);
      }
    }
    return resultado;
  }

  elegirCategoria(categoria: string) {
    this.categoriaElegida = categoria;
  }

  cambiarSoloFavoritas() {
    this.soloFavoritas = !this.soloFavoritas;
  }

  contarFavoritas(): number {
    let total = 0;
    for (let i = 0; i < this.fotos.length; i++) {
      if (this.fotos[i].favorita) {
        total++;
      }
    }
    return total;
  }

  marcarFavorita(foto: Foto) {
    foto.favorita = !foto.favorita;
  }

  // ----- Visor -----

  abrir(foto: Foto) {
    this.fotoAbierta = foto;
  }

  cerrar() {
    this.fotoAbierta = null;
  }

  // Posición de la foto abierta dentro de las que se ven (para el "3 / 10")
  posicionActual(): number {
    if (this.fotoAbierta === null) {
      return 0;
    }
    return this.fotosVisibles().indexOf(this.fotoAbierta);
  }

  siguiente() {
    let lista = this.fotosVisibles();
    let i = this.posicionActual() + 1;
    if (i >= lista.length) {
      i = 0; // al llegar al final vuelve a la primera
    }
    this.fotoAbierta = lista[i];
  }

  anterior() {
    let lista = this.fotosVisibles();
    let i = this.posicionActual() - 1;
    if (i < 0) {
      i = lista.length - 1;
    }
    this.fotoAbierta = lista[i];
  }
}
