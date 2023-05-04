import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardTematicaComponent } from './components/card-tematica/card-tematica.component';
import { ComponentsModule } from './components/components.module';
import { App, AppState } from '@capacitor/app';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  alertController: any;

  constructor() { }

  ngOnInit(): void {
    this.ionViewDidEnter();
  }

  ionViewDidEnter() {
    App.addListener('appStateChange', (state: AppState) => {
      if (state.isActive) {
        // La aplicación se ha restaurado después de ser minimizada
        console.log('aplicación primer plano');

        // Aquí puedes mostrar el mensaje que quieras
        alert('HOLA DE NUEVO');
        //this.presentAlert;
      } else {
        // La aplicación se ha minimizado
        console.log('aplicación segundo plano');
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
