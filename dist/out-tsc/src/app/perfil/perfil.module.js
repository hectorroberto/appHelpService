import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilPage } from './perfil.page';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components/components.module';
var routes = [
    {
        path: '',
        component: PerfilPage
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                SharedModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PerfilPage]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());
export { PerfilPageModule };
//# sourceMappingURL=perfil.module.js.map