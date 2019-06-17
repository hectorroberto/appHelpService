import { Component, OnInit, ErrorHandler } from '@angular/core';
import { PerfilService } from 'src/app/perfil/services/perfil.service';
import { Perfil } from 'src/app/perfil/Models/perfil.model';
import { NgModule} from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AreasService } from 'src/app/areas/services/areas.service';
import { Areas } from 'src/app/areas/Models/areas.model';
import { StatusBar } from '@ionic-native/status-bar/ngx';



import { IonicStorageModule, Storage } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular'

import { finalize } from 'rxjs/operators';

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
    private areasService: AreasService,
    

    
    
    private camera: Camera,
    //private file: File, 
    private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    //private filePath: FilePath
    
    
    ) { }

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

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();


  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };


  }

  async tirarFoto() {

    this.takePicture(this.camera.PictureSourceType.CAMERA);
  }


}
