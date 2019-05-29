import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule],
            exports: [BrowserModule, IonicModule],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map