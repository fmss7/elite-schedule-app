import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, GamePage, StandingsPage, TeamHomePage } from '../pages/pages';
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
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      EliteApi
      ]
})
export class AppModule {}
