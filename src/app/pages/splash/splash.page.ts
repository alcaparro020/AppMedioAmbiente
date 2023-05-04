import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import lottie, { RendererType } from 'lottie-web';
import animacion from "../../../assets/LoaderJuntadeAndalucia.json";
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }
  // Preguntar como hacer para que pase a la siguiente pagina cuando TERMINE la animacion
  ngOnInit() {
    const container = document.getElementById('lottie-container');
    if (container) {
      const options = {
        container: container as Element, // Se especifica que el tipo es Element
        renderer: 'svg' as RendererType, // Se especifica el tipo de renderer como RendererType
        loop: true,
        autoplay: true,
        animationData: animacion,
        animationSpeed: 0.1 // <- Aquí se define la velocidad de la animación
      };
      lottie.loadAnimation(options);
      //algo.addEventListener('complete', () => {
      //const algo = lottie.loadAnimation(options);
      //algo.addEventListener('complete', () => {
      // Redirigimos al usuario a la página deseada
      //this.router.navigate(['/home']);
      //});
      setTimeout(() => {
        this.router.navigate(['/onvoarding']);
      }, 2000);

    }
  }


}
