import {wine} from './wine.model';
import {EventEmitter} from '@angular/core';

export class wineService {
  wineSelected = new EventEmitter<wine>();
  private winee: wine[] = [
    new wine('Les Maselles Sauvignon Blanc', '4 806,93 ₸',
    'https://cdn.shopify.com/s/files/1/0101/0981/2814/products/wine-les-maselles-sauvignon-blanc-17006230667342_x200.png',
    'This Sauvignon Blanc comes from our long-time cooperative partner Alliance Loire who specialise in growing and making top-quality Loire wines and this is a fine example of what the Loire does so well. This is a crisp, dry, and refreshing Sauvignon Blanc with inviting aromas of fresh cut grass, lime zest and bright, fresh acidity on the finish.'),

    new wine('Luna Argenta', '6 224,97 ₸' ,
    'https://cdn.shopify.com/s/files/1/0101/0981/2814/products/wine-luna-argenta-28427764236366_x200.png',
    'Coming from the hot southern Italian Puglia region, this wine is made from partially dried (Appassite) Negroamaro and Primitivo grapes. Intense aromas of crushed blackberry and cherry with notes of vanilla and cinnamon spice that follow through to the palate along with hints of mocha/chocolate. This wine has established itself as a firm customer favourite.'),

    new wine('Famille JM Cazes Côtes du Rhône Réserve', '5 752,89 ₸',
    'https://cdn.shopify.com/s/files/1/0101/0981/2814/products/wine-famille-jm-cazes-cotes-du-rhone-reserve-28753992155214_x200.png',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus', '2 869,71 ₸',
    'https://cdn.shopify.com/s/files/1/0101/0981/2814/products/wine-chateau-belles-eaux-les-coteaux-28429429440590_x200.png',
    'Côtes du Rhône Réserve continues the Rhône winemaking journey of the Cazes family of Château Lynch-Bages fame, who in 2006 acquired Domaine des Sénéchaux in Châteauneuf-du-Pape. Made with the same care and attention, this Côtes du Rhône enjoys a Mediterranean climate with hot sunny days regularly tempered by the mistral wind. The vineyards are farmed environmentally with focus on biodiversity conservation, plant protection and careful water resource management.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸',
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸',
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸',
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸',
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸',
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),

    new wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸',
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),


  ];
  getwinee() {
    return this.winee.slice();
  }
  getwine(index: number) {
    return this.winee[index];
  }
}

