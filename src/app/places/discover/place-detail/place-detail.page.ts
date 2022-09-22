import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../offers/place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  placeDetail: Place;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.placeDetail = this.placesService.findPlaces(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl
    .create({component: CreateBookingComponent, componentProps: {selectedPlace: this.placeDetail}})

    .then(modelEl => {
      modelEl.present();
      return modelEl.onDidDismiss();
    })
    .then(resultData =>  {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirm'){
        console.log('Booked!');
      }
    });
  }
}
