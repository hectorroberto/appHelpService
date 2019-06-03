import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PerfilService } from '../perfil/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
var PerfilPage = /** @class */ (function () {
    function PerfilPage(perfilService, route, router, navCtrl) {
        this.perfilService = perfilService;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    PerfilPage.prototype.ngOnInit = function () {
        this.perfil$ = this.perfilService.getAll();
    };
    PerfilPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil',
            templateUrl: './perfil.page.html',
            styleUrls: ['./perfil.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PerfilService,
            ActivatedRoute,
            Router,
            NavController])
    ], PerfilPage);
    return PerfilPage;
}());
export { PerfilPage };
//# sourceMappingURL=perfil.page.js.map