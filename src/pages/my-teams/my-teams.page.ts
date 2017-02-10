import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';

import { EliteApi, UserSettings } from '../../shared/shared';
import { TournamentsPage, TeamHomePage } from '../pages';

@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

    
    favourites = [
    
        {
            team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
            tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
            tournamentName: 'March Madness Tournament'
        },
        {
            team: { id: 805, name: 'Italy', coach: 'Marcello Lippi' },
            tournamentId: '47',
            tournamentName: 'Germany \'06'
        }
    ]
    

    constructor(private navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi, private loadingcontroller: LoadingController, private userSettings: UserSettings) { }

    goToTournaments() {
        this.navCtrl.push(TournamentsPage);
    }

    favouriteTapped($evetn, favourite) {
        let loader = this.loadingcontroller.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        })
        this.eliteApi.getTournamentData(favourite.tournamentId)
            .subscribe(t => this.navCtrl.push(TeamHomePage, favourite.team));
    }

/*
    ionViewDidEnter(){
        this.favourites = this.userSettings.getAllFavourites(); 
    }
*/

}
