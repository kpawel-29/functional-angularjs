/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material/angular-material.scss';
import * as ngMaterial from 'angular-material';
import {AppComponent} from './app.component';

export module AppModule {
    export const name: string = 'app';

    angular.module(AppModule.name, [ngMaterial])
        .component('app', AppComponent);
}