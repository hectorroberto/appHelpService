import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';
var PerfilService = /** @class */ (function (_super) {
    tslib_1.__extends(PerfilService, _super);
    function PerfilService(authService, db) {
        var _this = _super.call(this, db) || this;
        _this.authService = authService;
        _this.init();
        return _this;
    }
    PerfilService.prototype.init = function () {
        var _this = this;
        this.authService.authState$.subscribe(function (perfil) {
            if (perfil) {
                // this.setCollection('/perfils/${perfil.uid}/Perfil')
                _this.setCollection("/user");
                return;
            }
            _this.setCollection(null);
        });
    };
    PerfilService.prototype.setNovaCollection = function (path) {
        this.setCollection("" + path);
    };
    PerfilService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, AngularFirestore])
    ], PerfilService);
    return PerfilService;
}(Firestore));
export { PerfilService };
//# sourceMappingURL=perfil.service.js.map