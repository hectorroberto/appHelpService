import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Perfil } from '../../Models/perfil.model';

@Component({
  selector: 'app-perfil-item',
  templateUrl: './perfil-item.component.html',
  styleUrls: ['./perfil-item.component.scss'],
})
export class PerfilItemComponent {
  
  // <app-Perfil-item [Perfil]="Perfil"
  // (done)="onDone($event)"

  @Input() perfil: Perfil;
  @Output() done = new EventEmitter<Perfil>();
  @Output() update = new EventEmitter<Perfil>();
  @Output() delete = new EventEmitter<Perfil>();
 


}
