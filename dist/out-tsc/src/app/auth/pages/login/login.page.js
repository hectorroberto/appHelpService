import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.authProviders = AuthProvider;
        this.configs = {
            isSignIn: true,
            action: 'Login',
            actionChange: 'Criar conta'
        };
        this.nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    }
    LoginPage.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginPage.prototype.createForm = function () {
        this.authForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    Object.defineProperty(LoginPage.prototype, "nome", {
        get: function () {
            return this.authForm.get('nome');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "email", {
        get: function () {
            return this.authForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "password", {
        get: function () {
            return this.authForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.changeAuthAction = function () {
        this.configs.isSignIn = !this.configs.isSignIn;
        var isSignIn = this.configs.isSignIn;
        this.configs.action = isSignIn ? 'Login' : 'Registrar-se';
        this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Já possuo uma conta';
        !isSignIn
            ? this.authForm.addControl('name', this.nameControl)
            : this.authForm.removeControl('name');
    };
    LoginPage.prototype.onSubmit = function (provider) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var credentials, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.authenticate({
                                isSignIn: this.configs.isSignIn,
                                user: this.authForm.value,
                                provider: provider
                            })];
                    case 1:
                        credentials = _a.sent();
                        console.log('Authenticated: ', credentials);
                        console.log('Redirecting...');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('Auth error: ', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map