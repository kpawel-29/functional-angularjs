/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import 'angular-mocks';

export module TodoMockModule {
    export const name: string = 'app.todo.mock';

    angular.module(TodoMockModule.name, ['ngMockE2E'])
        .run(($httpBackend: angular.IHttpBackendService) => {
            $httpBackend.when('GET', /.*\/todos$/)
                .respond(() => [200, {data: 'list of todos'}]);
        });
}