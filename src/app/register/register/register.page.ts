import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User, AuthProvider } from 'src/app/core/services/auth.types';
import { AreasService } from 'src/app/areas/services/areas.service';

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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  user = {} as User;

  authProviders = AuthProvider;

  configs = {

    isSignIn: false,
    action: 'Login',
    actionChange: 'Criar conta'
  };

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private areasService: AreasService,


    private camera: Camera,
    //private file: File, 
    private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    //private filePath: FilePath
  ) { }






  ngOnInit() {

  }

  /*async onSubmit(provider: AuthProvider): Promise<void>{
    
    try{
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.registerForm.value,
        provider
      });
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
    } catch(e){
      console.log('Auth error: ', e);
    }
  }*/

  async goRegisterPage(provider: AuthProvider): Promise<void> {
    //this.authService.criarConta(this.user);
    try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.user,
        provider
      });
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/about');
    } catch (e) {
      console.log('Auth error: ', e);
    }
  }
  /*try {
    this.authService.logar(this.user);
    this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
  } catch (e) {
    console.log('Auth error: ', e);
  }
  */


 
}














