import {vodka} from './vodka.model';
import {EventEmitter} from '@angular/core';

export class VodkaService {
  vodkaSelected = new EventEmitter<vodka>();
  private vodka: vodka[] = [
    new vodka('Les Maselles Sauvignon Blanc', '4 806,93 ₸',
      'https://cdn.shopify.com/s/files/1/0101/0981/2814/products/wine-les-maselles-sauvignon-blanc-17006230667342_x200.png',
      'This Sauvignon Blanc comes from our long-time cooperative partner Alliance Loire who specialise in growing and making top-quality Loire wines and this is a fine example of what the Loire does so well. This is a crisp, dry, and refreshing Sauvignon Blanc with inviting aromas of fresh cut grass, lime zest and bright, fresh acidity on the finish.'),

  ];

  getvodkas() {
    return this.vodka.slice();
  }

  getvodka(index: number) {
    return this.vodka[index];
  }
}
