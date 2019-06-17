import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/Camera/ngx';
 import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';




@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(),
  HttpClientModule],
  providers:[
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    Camera, File, WebView
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
