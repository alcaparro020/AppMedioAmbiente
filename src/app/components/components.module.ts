import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTematicaComponent } from './card-tematica/card-tematica.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardTematicaComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [CardTematicaComponent],
  exports: [CardTematicaComponent]
})
export class ComponentsModule { }
