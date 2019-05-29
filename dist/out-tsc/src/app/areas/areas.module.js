import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AreasPage } from './areas.page';
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
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AreasPage]
        })
    ], AreasPageModule);
    return AreasPageModule;
}());
export { AreasPageModule };
//# sourceMappingURL=areas.module.js.map