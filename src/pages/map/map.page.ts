import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { EliteApi } from '../../shared/shared';

@Component({
    selector: 'page-map',
    templateUrl: 'map.page.html',

})
export class MapPage {

    map: any;
    constructor(public navParams: NavParams, private eliteApi: EliteApi) { }

    ionViewDidLoad() {
        let games = this.navParams.data;
        let tourneyData = this.eliteApi.getCurrentTourney();
        let location = tourneyData.locations[games.locationId];

        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            makerLabel: games.location
        };
    }

}
