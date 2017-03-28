/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ITodo} from '../components/todos/todos.model';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../constants/todos.constants';

function addTodo(todo: ITodo) {
    return {
        type: ADD_TODO,
        payload: {
            todo
        }
    }
}

function removeTodo(id: number) {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}

function toggleTodo(todo: ITodo) {
    return {
        type: TOGGLE_TODO,
        payload: {
            todo
        }
    }
}

export default {addTodo, removeTodo, toggleTodo};
