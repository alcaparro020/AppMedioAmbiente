import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';

@Component({
  selector: 'app-card-tematica',
  templateUrl: './card-tematica.component.html',
  styleUrls: ['./card-tematica.component.scss'],
})
export class CardTematicaComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;
  @Input() backgroundColor: string; // Remember use a color like a string

  constructor() { }

  ngOnInit() {
    
  }

}
