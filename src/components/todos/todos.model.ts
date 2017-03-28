/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
export interface ITodo {
    id: number;
    name: string;
    description?: string;
    completed: boolean;
}

export interface ITodoRepository {
    getAll(): ITodo[];
    getById(id: number): ITodo;
    add(todo: ITodo, onSuccess?: Function, onFail?: Function): ITodo | boolean;
    remove(todo: ITodo, onSuccess?: Function, onFail?: Function): boolean;
    update(todo: ITodo, onSuccess?: Function, onFail?: Function): ITodo | boolean;
}