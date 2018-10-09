import {
  Component,
  OnInit
} from '@angular/core';
import {
  MapService
} from '../../services/map.service';
import {
  CoinService
} from '../../coin.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  position: google.maps.LatLng;
  content: string;

  title = 'Welcome to crypto world';

  center = new google.maps.LatLng(
      46.755685,
      23.589273
  );

  latitude: number = 46.772839;
  longitude: number = 23.596180;


  zoom = 14;

  coins: any;
  // markers = [];

  markers: marker[] = [{
          lat: 0,
          lng: 0,
          label: 'Map A',
          draggable: true,
          //iconUrl:'http://maps.google.com/mapfiles/ms/icons/green.png'
      },
      {
          lat: 0,
          lng: 0,
          label: 'Map B',
          draggable: false,
          // iconUrl:'http://maps.google.com/mapfiles/ms/icons/green.png'
      },
      {
          lat: 0,
          lng: 0,
          label: 'Map C',
          draggable: true,
          //iconUrl:'http://maps.google.com/mapfiles/ms/icons/green.png'
      },
      {
          lat: 0,
          lng: 0,
          label: 'Map D',
          draggable: true,
          //iconUrl:'http://maps.google.com/mapfiles/ms/icons/green.png'
      },
      {
          lat: 0,
          lng: 0,
          label: 'Map E',
          draggable: true,
          //iconUrl:'http://maps.google.com/mapfiles/ms/icons/green.png'
      },
  ];
  constructor(
      private map: MapService,
      private service: CoinService
  ) {

  }


  clickedMarker(marker: marker, index: number) {
      console.log('Clicked Marker:' + marker.label + ' at index' + index);
  }

  ngOnInit() {
      var mapProp = {
          center: new google.maps.LatLng(18.5793, 73.8143),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.getCoins();
  }


  getCoins() {

      this.service.getCoins().subscribe(res => {
          this.coins = res;
      });
  }
  setCenter(e: any) {
      e.preventDefault();
      this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
      this.center = new google.maps.LatLng(
          46.755685,
          23.589273
      );
      this.setMarker(this.center, "search result", "Coords: " + this.latitude + " , " + this.longitude);
      this.latitude = null;
      this.longitude = null;

  }

  setMarker(latLng: google.maps.LatLng, title: string, content: string): void {
      this.map.deleteMarkers();
      // Sets the marker.
      this.position = latLng;
      this.title = title;
      // Sets the info window.
      this.content = content;
  }
  method(i) {
      console.log(this.coins[i].longitude + "," + this.coins[i].latitude);

      this.markers[i].lat = this.coins[i].longitude;
      this.markers[i].lng = this.coins[i].latitude;
      this.markers[i].label = this.coins[i].name;
  }
  removeMarker(i) {
      
  }

}


interface marker {
  lat: number;
  lng: number;
  label ? : string;
  draggable: boolean;
  iconUrl ? : string;
}