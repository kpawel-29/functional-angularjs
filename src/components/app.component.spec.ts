/**
 * Created by Marcin Sirocki
 * e-mail: m.sirocki@madkom.pl
 */
import * as angular from 'angular';
import  'angular-mocks';
import {AppModule} from "./app.module";

describe('app component', () => {
    let element: JQuery, scope;

    beforeEach(angular.mock.module(AppModule.name));

    beforeEach(inject((_$rootScope_, _$compile_) => {
        const $compile = _$compile_;
        const $rootScope = _$rootScope_;

        scope = $rootScope.$new();
        element = angular.element('<app></app>');

        $compile(element)(scope);
    }));

    test('should display component app', () => {
        scope.$digest();
        expect(element.find('todos').length).toEqual(1)
    })
});
