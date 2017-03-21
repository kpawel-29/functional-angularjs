/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import 'angular-mocks';
import {TodosModule} from "./todos.module";
import {TodosLocaleStorageRepository} from "./todos-localestorage-repo.service";
import {ITodo} from "./todos.model";
let todosLocaleStorageRepository: TodosLocaleStorageRepository;
let localStorageServiceMock: any;

describe('todos localstorage repository', () => {
    let mockStorage = [];
    beforeEach(angular.mock.module(TodosModule.name));

    beforeEach(angular.mock.inject((TodosLocaleStorageRepository: TodosLocaleStorageRepository, localStorageService: any) => {
        todosLocaleStorageRepository = TodosLocaleStorageRepository;
        localStorageServiceMock = localStorageService;
        localStorageServiceMock.set = jest.fn((key, val) => {
            mockStorage.push({key, val});
        });
    }));

    test('adding todo to localstorage', () => {
        const todo: ITodo = {
            id: 1,
            name: 'passed test',
            description: 'For testing purposes.',
            completed: true
        };
        expect(todosLocaleStorageRepository.add(todo)).toBe(todo);
        expect(localStorageServiceMock.set).toHaveBeenCalledTimes(1);
        expect(mockStorage).not.toHaveLength(0);
        expect(mockStorage[0].val).toEqual(todo);
    });
});