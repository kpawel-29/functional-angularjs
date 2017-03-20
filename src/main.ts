import * as angular from 'angular';
import {AppModule} from './components/app.module';

angular.module('main', [AppModule.name]);

angular.element(() => {
    angular.bootstrap(document, ['main']);
});
