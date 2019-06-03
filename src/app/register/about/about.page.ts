import { Component, OnInit, ErrorHandler } from '@angular/core';
import { PerfilService } from 'src/app/perfil/services/perfil.service';
import { Perfil } from 'src/app/perfil/Models/perfil.model';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraOptions } from '@ionic-native/camera/ngx';
import { NgModule} from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AreasService } from 'src/app/areas/services/areas.service';
import { Areas } from 'src/app/areas/Models/areas.model';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  perfil = {} as Perfil;
  currentImage: string;
  constructor(private perfilService: PerfilService, private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private areasService: AreasService) { }

  areas$: Observable<Areas[]>;
  perfilServoce: PerfilService;

  ngOnInit() {
    //
    //this.perfilService.setNovaCollection(`/areas`);
    this.areas$ = this.areasService.getAll();
  }


  finalizarAbout() {
    this.perfil.estrelas = 5.0;
    //this.perfil.id = this.authState$.
    const perfil = this.perfilService.create(this.perfil, this.perfil.email);
    this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
  }

}
