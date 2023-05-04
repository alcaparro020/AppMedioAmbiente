import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardThemeArray } from 'src/app/moc/card-theme-array';
import { CardTheme } from 'src/app/interfaces/card-theme';
import { PipesModule } from "../../pipes/pipes.module";
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { Camera, CameraOptions, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';



@Component({
  selector: 'app-onvoarding',
  templateUrl: './onvoarding.page.html',
  styleUrls: ['./onvoarding.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule, PipesModule]
})
export class HomePage implements OnInit {

  arrayCardsTheme: CardTheme[];

  ngOnInit(): void {
    this.arrayCardsTheme = CardThemeArray;
  }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera // Puedes cambiar esto a CameraSource.Photos para seleccionar una imagen de la galería
    };

    const image: CameraPhoto = await Camera.getPhoto(options);
  }


}


