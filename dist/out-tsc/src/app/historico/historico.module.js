import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoricoPage } from './historico.page';
var routes = [
    {
        path: '',
        component: HistoricoPage
    }
];
var HistoricoPageModule = /** @class */ (function () {
    function HistoricoPageModule() {
    }
    HistoricoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HistoricoPage]
        })
    ], HistoricoPageModule);
    return HistoricoPageModule;
}());
export { HistoricoPageModule };
//# sourceMappingURL=historico.module.js.map