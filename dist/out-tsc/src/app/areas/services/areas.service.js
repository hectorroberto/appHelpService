import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';
var AreasService = /** @class */ (function (_super) {
    tslib_1.__extends(AreasService, _super);
    function AreasService(authService, db) {
        var _this = _super.call(this, db) || this;
        _this.authService = authService;
        _this.init();
        return _this;
    }
    AreasService.prototype.init = function () {
        var _this = this;
        this.authService.authState$.subscribe(function (user) {
            if (user) {
                // this.setCollection('/users/${user.uid}/areas')
                _this.setCollection("/areas/");
                return;
            }
            _this.setCollection(null);
        });
    };
    AreasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, AngularFirestore])
    ], AreasService);
    return AreasService;
}(Firestore));
export { AreasService };
//# sourceMappingURL=areas.service.js.map