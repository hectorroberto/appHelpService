import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AreasPage } from './areas.page';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components/components.module';
var routes = [
    {
        path: '',
        component: AreasPage
    }
];
var AreasPageModule = /** @class */ (function () {
    function AreasPageModule() {
    }
    AreasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                SharedModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AreasPage]
        })
    ], AreasPageModule);
    return AreasPageModule;
}());
export { AreasPageModule };
//# sourceMappingURL=areas.module.js.map