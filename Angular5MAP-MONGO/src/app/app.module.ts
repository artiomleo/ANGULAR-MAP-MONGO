import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';
import { MapService } from './services/map.service';
import { GoogleMapComponent } from './components/map/google-map.component';
import { GoogleMapMarkerDirective } from './directives/google-map-marker.directive';

import { CoinService } from './coin.service';
import { MapComponent } from './components/map/map.component';

//import { GoogleMapComponent } from './components/map/google-map.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    MapComponent,
    GoogleMapComponent,
    GoogleMapMarkerDirective
    
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes),
      HttpClientModule, 
      ReactiveFormsModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDN6Y38b5gDug5fH9iMgabJyyjDW4Wb6MI'
      })
  ],
  providers: [
    CoinService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
