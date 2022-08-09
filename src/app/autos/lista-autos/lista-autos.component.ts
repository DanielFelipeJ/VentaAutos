import {Component, OnInit} from "@angular/core";
@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit {

  tituloListAutos: string = "Lista de Automóviles";
  arregloAutos: Autos[] = [];
  filtro = "default";
  imageWidth = 200;
  imageMargin = 2;
  muestraImagen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.muestraImagen = false;
    this.arregloAutos = [
      {
        id: "1",
        marca: "Khia",
        modelo: "Gol",
        anio: "2022",
        color: "Rojo",
        kilometros: "0",
        precio: "47000000",
        calificacion: 5,
        imagenUrl: "assets/ImagenAutos/imagen1.jpeg"
      },
      {
        id: "1",
        marca: "Vokswagen",
        modelo: "Gol",
        anio: "2022",
        color: "Rojo",
        kilometros: "0",
        precio: "47000000",
        calificacion: 3,
        imagenUrl: "assets/ImagenAutos/Imagen2.jpeg"
      },
      {
        id: "1",
        marca: "Khia",
        modelo: "Gol",
        anio: "2022",
        color: "Rojo",
        kilometros: "0",
        precio: "47000000",
        calificacion: 2,
        imagenUrl: "assets/ImagenAutos/imagen3.webp"
      },
      {
        id: "1",
        marca: "Vokswagen",
        modelo: "Gol",
        anio: "2022",
        color: "Rojo",
        kilometros: "0",
        precio: "47000000",
        calificacion: 4,
        imagenUrl: "assets/ImagenAutos/imagen4.jpeg"
      },
      {
        id: "1",
        marca: "Vokswagen",
        modelo: "Gol",
        anio: "2022",
        color: "Rojo",
        kilometros: "0",
        precio: "47000000",
        calificacion: 5,
        imagenUrl: "assets/ImagenAutos/imagen5.jpeg"
      }];
  }

  muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
  }
}
