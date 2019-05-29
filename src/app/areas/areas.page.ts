import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Areas } from './Models/areas.model';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.page.html',
  styleUrls: ['./areas.page.scss'],
})
export class AreasPage implements OnInit {


  areas$: Observable<Areas[]>

  constructor() { }

  ngOnInit() {
    this.areas$ = of([
      { id: '123a', title: 'Aprender Ionic'},
      { id: '123b', title: 'Aprender Firebase'}
    ]);
  }

}
