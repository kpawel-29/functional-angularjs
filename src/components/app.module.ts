/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import {AppComponent} from './app.component';

export module AppModule {
    export const name: string = 'app';

    angular.module(AppModule.name, [])
        .component('app', AppComponent);
}