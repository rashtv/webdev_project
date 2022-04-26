import {beer} from './beer.model';
import {EventEmitter} from '@angular/core';

export class beerService {
  beerSelected = new EventEmitter<beer>();
  private beers: beer[] = [
    new beer('Les Maselles Sauvignon Blanc','4 806,93 ₸', 
    'https://cdn.shopify.com/s/files/1/0101/0981/2814/products/wine-les-maselles-sauvignon-blanc-17006230667342_x200.png',
    'This Sauvignon Blanc comes from our long-time cooperative partner Alliance Loire who specialise in growing and making top-quality Loire wines and this is a fine example of what the Loire does so well. This is a crisp, dry, and refreshing Sauvignon Blanc with inviting aromas of fresh cut grass, lime zest and bright, fresh acidity on the finish.'),
  ];
  getbeers() {
    return this.beers.slice();
  }
  getbeer(index: number) {
    return this.beers[index];
  }
}

