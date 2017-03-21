/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular'
import 'angular-local-storage';
import {TodosLocaleStorageRepository} from './todos-localestorage-repo.service';

export module TodosModule {
    export const name: string = 'app.todos';

    angular.module(TodosModule.name, ['LocalStorageModule'])
        .service('TodosLocaleStorageRepository', TodosLocaleStorageRepository);
}