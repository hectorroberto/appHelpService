import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { AreasService } from 'src/app/areas/services/areas.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, navCtrl, route, router, areasService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.areasService = areasService;
        this.user = {};
        this.authProviders = AuthProvider;
        this.configs = {
            isSignIn: false,
            action: 'Login',
            actionChange: 'Criar conta'
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
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
    RegisterPage.prototype.goRegisterPage = function (provider) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var credentials, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.authenticate({
                                isSignIn: this.configs.isSignIn,
                                user: this.user,
                                provider: provider
                            })];
                    case 1:
                        credentials = _a.sent();
                        this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/about');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('Auth error: ', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            NavController,
            ActivatedRoute,
            Router,
            AreasService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map