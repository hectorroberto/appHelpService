import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AreasService } from './services/areas.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
var AreasPage = /** @class */ (function () {
    function AreasPage(areasService, route, router, navCtrl) {
        this.areasService = areasService;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    AreasPage.prototype.ngOnInit = function () {
        this.areas$ = this.areasService.getAll();
    };
    AreasPage.prototype.onUpdate = function (areas) {
        this.navCtrl.navigateForward("/perfil");
        //this.navCtrl.navigateForward(`/perfil/ ${areas.title}`);
    };
    AreasPage = tslib_1.__decorate([
        Component({
            selector: 'app-areas',
            templateUrl: './areas.page.html',
            styleUrls: ['./areas.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AreasService,
            ActivatedRoute,
            Router,
            NavController])
    ], AreasPage);
    return AreasPage;
}());
export { AreasPage };
//# sourceMappingURL=areas.page.js.map