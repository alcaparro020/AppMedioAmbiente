import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTematicaComponent } from './components/card-tematica/card-tematica.component';
import { ComponentsModule } from './components/components.module';
import { TranslatePipe } from './pipes/translate.pipe';
import { PipesModule } from './pipes/pipes.module';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, ComponentsModule, PipesModule],
  entryComponents: [],
  providers: [
    TranslatePipe
  ]
})
export class AppmoduleModule implements OnInit {

  ngOnInit(): void {
    registerLocaleData(es);
  }

}
