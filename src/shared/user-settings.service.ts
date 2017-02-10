import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
 import localforage from 'localforage';

import * as _ from 'lodash';

@Injectable()

export class UserSettings{

    storage = new Storage();

    constructor(private events: Events){}

    favouriteTeam(team, tournamentId, tournamentName){
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName};
        this.storage.set(team.id, JSON.stringify(item));
        this.events.publish('Favourite:changed');
    }

    unfavouriteTeam(team){
        this.storage.remove(team.id);
        this.events.publish('Favourites:changed');
    }

    isFavouriteTeam(teamId){
        return this.storage.get(teamId).then(value => value ? true : false);
    }

    getAllFavourites(){
        let items = [];
        _.forIn(window.localStorage, (v, k) => {
            items.push(JSON.parse(v));
        });
        return items.length ? items : null;
    }

}