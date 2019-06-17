import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Areas } from './Models/areas.model';
import { AreasService } from './services/areas.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';



import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.page.html',
  styleUrls: ['./areas.page.scss'],
})
export class AreasPage implements OnInit {

  areas$: Observable<Areas[]>;

  constructor(private areasService: AreasService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private vibration: Vibration ) { }

  ngOnInit() {
    this.areas$ =  this.areasService.getAll();
  } 


  onUpdate(areas: Areas): void{
    this.navCtrl.navigateForward(`/perfil`);
    this.vibration.vibrate(1000);
    //this.navCtrl.navigateForward(`/perfil/ ${areas.title}`);
  }

  //*ngIf="areas$ | async as areas"

}
