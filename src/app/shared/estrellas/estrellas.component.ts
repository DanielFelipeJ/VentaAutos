import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {

  faStar = faStar;
  starsList: any[] = [];

  @Input() calificacion: number = 0;
  @Output() starsClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) : void {
    this.starsList = [];
    for ( var i = 1; i <= this.calificacion; i++) {
      this.starsList.push(i);
    }
  }

  onClick( stars: number ): void {
    this.starsClick.emit("Calificaciòn: " + stars);
  }
}
