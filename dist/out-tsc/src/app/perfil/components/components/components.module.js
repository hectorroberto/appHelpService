import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PerfilItemComponent } from '../perfil-item/perfil-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                PerfilItemComponent
            ],
            imports: [
                SharedModule
            ],
            exports: [
                PerfilItemComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map