// Modelo de datos: así es cada foto de la galería
export interface Foto {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  archivo: string;   // nombre del archivo dentro de public/imagenes
  autor: string;     // autor y licencia de la imagen
  favorita: boolean;
}
