import {Component, OnInit} from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit {

  tituloListAutos: string = "Lista de Automóviles";
  arregloAutos: Autos[] = [];
  listAutosFiltrados: Autos[] = [];
  private _filtro = "";
  imageWidth = 200;
  imageMargin = 2;
  muestraImagen: boolean = false;

  description: string;

  faStar = faStar;

  constructor() {
    this.description = "Prueba"
  }

  ngOnInit(): void {
    this.muestraImagen = false;
    this.arregloAutos = [
      {
        id: "1",
        marca: "Khia",
        modelo: "Ad",
        anio: "2001",
        color: "Gris",
        kilometros: "10",
        precio: "24000000",
        calificacion: 5,
        imagenUrl: "assets/ImagenAutos/imagen1.jpeg"
      },
      {
        id: "2",
        marca: "Vokswagen",
        modelo: "Tr-2",
        anio: "2013",
        color: "Verde",
        kilometros: "2000",
        precio: "36000000",
        calificacion: 3,
        imagenUrl: "assets/ImagenAutos/Imagen2.jpeg"
      },
      {
        id: "3",
        marca: "Mazda",
        modelo: "KJ-24",
        anio: "2016",
        color: "Negro",
        kilometros: "20",
        precio: "61000000",
        calificacion: 2,
        imagenUrl: "assets/ImagenAutos/imagen3.webp"
      },
      {
        id: "4",
        marca: "Khia",
        modelo: "GTY2",
        anio: "2002",
        color: "Rojo",
        kilometros: "3000",
        precio: "12000000",
        calificacion: 4,
        imagenUrl: "assets/ImagenAutos/imagen4.jpeg"
      },
      {
        id: "5",
        marca: "Vokswagen",
        modelo: "Gol",
        anio: "2022",
        color: "Rojo",
        kilometros: "0",
        precio: "47000000",
        calificacion: 5,
        imagenUrl: "assets/ImagenAutos/imagen5.jpeg"
      }];
    this.listAutosFiltrados = this.arregloAutos;
  }

  get filtro(): string {
    return this._filtro;
  }

  set filtro(filtro: string) {
    this._filtro = filtro;
    this.filtraAutos(this._filtro);
  }

  muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  procesaClick(event: any): void {
    // procesamos el click del boton del componente anidado
  }

  filtraAutos(filtrarPor: string): void {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    this.listAutosFiltrados = this.arregloAutos.filter(
      (auto: Autos) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
    );
    console.log(this._filtro);
    console.log(filtrarPor);
    console.log(this.listAutosFiltrados);
  }

  onClickCalification(mensaje: string): void {
    alert( "Dieron click en la calificación: " + mensaje );
  }
}
