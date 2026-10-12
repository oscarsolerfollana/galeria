# Galería de imágenes con Angular

Actividad 2 de Desarrollo de Aplicaciones en Red. Galería de imágenes hecha con Angular 21 como aplicación de una sola página (SPA).

## Funcionalidades

- Componente `Galeria` (principal), `TarjetaFoto` (cada imagen) y `Visor` (imagen ampliada).
- Las imágenes se cargan desde un array en el componente `Galeria`.
- Filtro por categoría y filtro de favoritas.
- Clic en una foto para verla en grande, con animación, flechas para pasar de foto y cierre con la X, la tecla Escape o pulsando fuera.
- Diseño responsive con CSS Grid.

## Ejecutar en local

Hace falta Node.js 20, 22 o 24.

```bash
npm install
npm start
```

Y abrir http://localhost:4200

## Publicar en GitHub Pages

1. Crear un repositorio vacío en GitHub llamado `galeria` y subir el código:

   ```bash
   git init
   git add .
   git commit -m "Galería con Angular"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/galeria.git
   git push -u origin main
   ```

2. Desplegar con angular-cli-ghpages (ya está instalado en el proyecto):

   ```bash
   npx ng deploy --base-href=/galeria/
   ```

3. En GitHub, ir a Settings → Pages y comprobar que la fuente es la rama `gh-pages`.
   La web queda en https://TU-USUARIO.github.io/galeria/

## Imágenes

Todas son de dominio público o tienen licencia libre (CC0 o CC BY 2.0). El autor de cada una aparece en el visor.
