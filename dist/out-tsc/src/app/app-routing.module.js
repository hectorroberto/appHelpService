import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', loadChildren: './auth/pages/login/login.module#LoginPageModule' },
    { path: 'areas', loadChildren: './areas/areas.module#AreasPageModule' },
    { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
    { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule' },
    { path: 'register', loadChildren: './register/register/register.module#RegisterPageModule' },
    { path: 'about', loadChildren: './register/about/about.module#AboutPageModule' },
    { path: 'perfil/:title', loadChildren: './perfil/perfil.module#PerfilPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map