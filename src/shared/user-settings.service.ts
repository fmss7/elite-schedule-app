import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalStorage } from 'localStorage';

import * as _ from 'lodash';

@Injectable()

export class UserSettings{

    storage = new Storage();

    constructor(){}

    favouriteTeam(team, tournamentId, tournamentName){
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName};
        this.storage.set(team.id, JSON.stringify(item));
    }

    unfavouriteTeam(team){
        this.storage.remove(team.id);
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