import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, GamePage, StandingsPage, TeamHomePage, MapPage } from '../pages/pages';
import { EliteApi } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      EliteApi
      ]
})
export class AppModule {}
