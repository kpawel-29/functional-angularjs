/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular'
import 'angular-local-storage';
import {TodosCompoenent} from './todos.component';
import {VisibilityFilterComponent} from './visibility-filter.component';
import {TodoMockModule} from './todo.mock.module';

export module TodosModule {
    export const name: string = 'app.todos';

    angular.module(TodosModule.name, ['LocalStorageModule', TodoMockModule.name])
        .component('todos', TodosCompoenent)
        .component('visibilityFilter', VisibilityFilterComponent);
}