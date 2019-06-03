import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PerfilItemComponent = /** @class */ (function () {
    function PerfilItemComponent() {
        // <app-Perfil-item [Perfil]="Perfil"
        // (done)="onDone($event)"
        this.done = new EventEmitter();
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PerfilItemComponent.prototype, "perfil", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], PerfilItemComponent.prototype, "done", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], PerfilItemComponent.prototype, "update", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], PerfilItemComponent.prototype, "delete", void 0);
    PerfilItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-perfil-item',
            templateUrl: './perfil-item.component.html',
            styleUrls: ['./perfil-item.component.scss'],
        })
    ], PerfilItemComponent);
    return PerfilItemComponent;
}());
export { PerfilItemComponent };
//# sourceMappingURL=perfil-item.component.js.map