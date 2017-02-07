import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { MyTeamsPage, TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.page.html'
})

export class TournamentsPage {

    tournaments: any;

    constructor(public navCtrl: NavController, private eliteApi: EliteApi, private loadingController: LoadingController) { }

    itemTapped($event, tourney){
        this.navCtrl.push(TeamsPage, tourney);
    }

    ionViewDidLoad(){
        let loader = this.loadingController.create({
            content: 'Getting tournaments...',
            spinner: 'bubbles'
        });

        loader.present().then(() => {
            this.eliteApi.getTournaments().then(data => this.tournaments = data);
            loader.dismiss();
        })
        
    }

}
