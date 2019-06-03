import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var AreasItemComponent = /** @class */ (function () {
    function AreasItemComponent() {
        // <app-areas-item [areas]="areas"
        // (done)="onDone($event)"
        this.done = new EventEmitter();
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AreasItemComponent.prototype, "areas", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AreasItemComponent.prototype, "done", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AreasItemComponent.prototype, "update", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AreasItemComponent.prototype, "delete", void 0);
    AreasItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-areas-item',
            templateUrl: './areas-item.component.html',
            styleUrls: ['./areas-item.component.scss'],
        })
    ], AreasItemComponent);
    return AreasItemComponent;
}());
export { AreasItemComponent };
//# sourceMappingURL=areas-item.component.js.map