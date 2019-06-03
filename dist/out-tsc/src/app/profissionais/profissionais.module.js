import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfissionaisPage } from './profissionais.page';
var routes = [
    {
        path: '',
        component: ProfissionaisPage
    }
];
var ProfissionaisPageModule = /** @class */ (function () {
    function ProfissionaisPageModule() {
    }
    ProfissionaisPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfissionaisPage]
        })
    ], ProfissionaisPageModule);
    return ProfissionaisPageModule;
}());
export { ProfissionaisPageModule };
//# sourceMappingURL=profissionais.module.js.map