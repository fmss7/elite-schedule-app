import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';


@Component({
    selector: 'page-game',
    templateUrl: 'game.page.html'
})
export class GamePage {

    game: any;
    team1: string;
    team2: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) { }

    ionViewDidLoad(){
        this.game = this.navParams.data;
        //PARA LA MAGIA (las risas son pocas)
        //this.team1 = this.game.team1;
        //this.team2 = this.game.team2;
        //PARA LA MAGIA (las risas son pocas)
    }

    teamTapped(teamId){
        let tourneyData = this.eliteApi.getCurrentTourney();
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.navCtrl.push(TeamHomePage, team);
    }


}
