import {Wine} from './Wine.model';
import {EventEmitter} from '@angular/core';

export class WineService {
  WineSelected = new EventEmitter<Wine>();
  private Winee: Wine[] = [
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/33/eb/10/horgelus-blanc-colombard-sauvignon_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Fleur de d`Artagnan Blanc Côtes de Gascogne 2020 - Plaimont','2 206,02 ₸', 
    'https://www.vinello.eu/media/image/61/79/3f/fleur-de-dartagnan-blanc-cotes-fleur-de-dartagnan-blanc-cotes-de-gascogne-igpgascogne-igp_600x600.webp',
    'Fleur de d`Artagnan Blanc Côtes de Gascogne by Plaimont is a fresh white wine from Gascogne in southern France that flatters the nose with its wonderful citrus aromas and floral notes. Nuances of yellow nuts such as apples and pears but also delicate herbal nuances after lemon balm complement the bouquet of Fleur de d`Artagnan Blanc. On the palate, the white Fleur de d`Artagnan Cuvée delights with a fine balance between lively fruit acid and a delicate residual sweetness, which gives this French white wine a perfect drinking flow. A wonderfully uncomplicated white wine for 1,000 occasions.'),

    new Wine('Aimery Grande Cuvée 1531 Rosé Crémant Brut - Sieur d`Arques','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/88/15/10/aimery-cremant-rose_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
    new Wine('Horgelus Blanc Côtes de Gascogne 2021 - Domaine Horgelus','2 869,71 ₸', 
    'https://www.vinello.eu/media/image/11/3d/a6/horgelus-blanc-colombard-sauvignon-glas_600x600.webp',
    'Domaine Horgelus Blanc Côtes de Gascogne IGP by Domaine Horgelus impresses with its brilliant light yellow colour, its varietal fresh and intense bouquet in which citrus aromas, tropical fruits and floral notes predominate. A very successful and tasteful cuvée, which is fruity and elegant on the palate with a lively acidity structure and a slightly mineral aftertaste.'),
    
      
  ];
  getWinee() {
    return this.Winee.slice();
  }
  getWine(index: number) {
    return this.Winee[index];
  }
}

