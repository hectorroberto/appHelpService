import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PerfilPage } from './perfil.page';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
