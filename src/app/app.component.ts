import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';

import { MyTeamsPage, TournamentsPage, TeamHomePage } from '../pages/pages';
import { EliteApi, UserSettings } from '../shared/shared';


@Component({
    templateUrl: 'app.html',
    providers: [
        EliteApi,
        UserSettings,
        HttpModule
    ]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    favouriteTeams: any[];
    rootPage: any = MyTeamsPage;


    constructor(public platform: Platform,
        private userSettings: UserSettings,
        private loadingController: LoadingController,
        private eliteApi: EliteApi,
        private events: Events) {
        this.initializeApp();

        // used for an example of ngFor and navigation

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            this.refreshFavourites();
            this.events.subscribe('favourites:changed', () => this.refreshFavourites());
            Splashscreen.hide();
        });
    }

    refreshFavourites() {
        this.favouriteTeams = this.userSettings.getAllFavourites();
    }

    goHome(): void {
        this.nav.push(MyTeamsPage);
    }

    goToTeam(favourite) {
        let loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favourite.tournamentId).subscribe(l => this.nav.push(TeamHomePage));
    }

    goToTournaments(): void {
        this.nav.push(TournamentsPage);
    }

}
