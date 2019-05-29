import { NgModule } from '@angular/core';
import { AreasItemComponent } from '../areas-item/areas-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AreasItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AreasItemComponent
  ]
})
export class ComponentsModule { }
