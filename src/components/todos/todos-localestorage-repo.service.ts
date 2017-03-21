/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ITodoRepository, ITodo} from './todos.model';

export class TodosLocaleStorageRepository implements ITodoRepository {
    static $inject = ['localStorageService'];

    constructor(private localStorageService: any) {}

    getAll(): ITodo[] {
        return undefined;
    }

    getById(id: number): ITodo {
        return undefined;
    }

    add(todo: ITodo, onSuccess?: Function, onFail?: Function): ITodo|boolean {
        this.localStorageService.set(todo.id, todo);
        return todo;
    }

    remove(todo: ITodo, onSuccess?: Function, onFail?: Function): boolean {
        return undefined;
    }

    update(todo: ITodo, onSuccess?: Function, onFail?: Function): ITodo|boolean {
        return undefined;
    }
}