import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    // eslint-disable-next-line max-len
    new Place('p1', 'Manhattan Mansion', 'In the heart of New York City.', 'https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium', 149.99),
    // eslint-disable-next-line max-len
    new Place('p2', 'L\'Amour Toujours', 'A romantic place in Paris!', 'https://cdn.mos.cms.futurecdn.net/pD3bsKPrjsqNiFDGRL5oq6-1200-80.jpg', 189.99),
    // eslint-disable-next-line max-len
    new Place('p3', 'The Foggy Palace', 'Not your average city trip!', 'https://www.wallpaperflare.com/static/485/441/140/fog-water-castle-morning-wallpaper.jpg', 99.99)
  ];

  constructor() { }

  get getPlaces(){
    return [...this.places];
  }

  findPlaces(id: string){
    return {...this.places.find(p => p.id === id)};
  }
}
