import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PerfilService } from 'src/app/perfil/services/perfil.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AreasService } from 'src/app/areas/services/areas.service';
var AboutPage = /** @class */ (function () {
    function AboutPage(perfilService, authService, navCtrl, route, areasService) {
        this.perfilService = perfilService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.areasService = areasService;
        this.perfil = {};
    }
    AboutPage.prototype.ngOnInit = function () {
        //
        //this.perfilService.setNovaCollection(`/areas`);
        this.areas$ = this.areasService.getAll();
    };
    AboutPage.prototype.finalizarAbout = function () {
        this.perfil.estrelas = 5.0;
        //this.perfil.id = this.authState$.
        var perfil = this.perfilService.create(this.perfil, this.perfil.email);
        this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
    };
    AboutPage = tslib_1.__decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.page.html',
            styleUrls: ['./about.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PerfilService, AuthService,
            NavController,
            ActivatedRoute,
            AreasService])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.page.js.map