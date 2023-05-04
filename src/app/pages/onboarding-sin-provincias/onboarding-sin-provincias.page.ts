import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-sin-provincias',
  templateUrl: './onboarding-sin-provincias.page.html',
  styleUrls: ['./onboarding-sin-provincias.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OnboardingSinProvinciasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
