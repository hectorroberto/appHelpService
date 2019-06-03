import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.authState$ = this.afAuth.authState;
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return this.authState$.pipe(map(function (user) { return user !== null; }));
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.authenticate = function (_a) {
        var isSignIn = _a.isSignIn, provider = _a.provider, user = _a.user;
        var operation;
        operation = isSignIn ? this.signInWithEmail(user) : this.signUpWithEmail(user);
        return operation;
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithEmail = function (_a) {
        var email = _a.email, password = _a.password;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signUpWithEmail = function (_a) {
        var email = _a.email, password = _a.password, name = _a.name;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (crendentials) {
            return crendentials.user.updateProfile({ displayName: name, photoURL: null })
                .then(function () { return crendentials; });
        });
    };
    //Registrar-se
    AuthService.prototype.criarConta = function (user) {
        this.afAuth.auth
            .createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.logar = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map