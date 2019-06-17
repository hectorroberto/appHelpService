import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {

    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar conta'
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  // Novo
  images = [];



  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.createForm();

  }
 
  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get nome(): FormControl {
    return <FormControl>this.authForm.get('nome');
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.authForm.get('password');
  }

  changeAuthAction() {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Registrar-se';
    this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Já possuo uma conta';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  async onSubmit(provider: AuthProvider): Promise<void> {

    try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
    } catch (e) {
      console.log('Auth error: ', e);
    }
  }

  async goToRegister() {
    this.router.navigateByUrl('/register')
  }
  
}
