import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkAuthState(state.url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route, segments) {
        var url = segments.map(function (s) { return "/" + s; }).join('');
        return this.checkAuthState(url).pipe(take(1));
    };
    AuthGuard.prototype.checkAuthState = function (redirect) {
        var _this = this;
        return this.authService.isAuthenticated.pipe(tap(function (is) {
            if (!is) {
                _this.router.navigate(['/login'], {
                    queryParams: { redirect: redirect } //login?redirect=
                });
            }
        }));
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map