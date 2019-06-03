import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Areas } from '../../Models/areas.model';

@Component({
  selector: 'app-areas-item',
  templateUrl: './areas-item.component.html',
  styleUrls: ['./areas-item.component.scss'],
})
export class AreasItemComponent {
  
  // <app-areas-item [areas]="areas"
  // (done)="onDone($event)"

  @Input() areas: Areas;
  @Output() done = new EventEmitter<Areas>();
  @Output() update = new EventEmitter<Areas>();
  @Output() delete = new EventEmitter<Areas>();
 


}
