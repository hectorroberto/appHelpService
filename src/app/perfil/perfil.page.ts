import { Component, OnInit } from '@angular/core';
import { Perfil } from '../perfil/Models/perfil.model';
import { Observable } from 'rxjs';
import { AreasService } from '../areas/services/areas.service';
import { PerfilService } from '../perfil/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil$: Observable<Perfil[]>;

  constructor(private perfilService: PerfilService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController ) { }

  ngOnInit() {
    this.perfil$ =  this.perfilService.getAll();
  } 

}
