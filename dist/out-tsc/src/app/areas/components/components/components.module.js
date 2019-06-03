import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AreasItemComponent } from '../areas-item/areas-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AreasItemComponent
            ],
            imports: [
                SharedModule
            ],
            exports: [
                AreasItemComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map