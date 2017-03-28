/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../constants/todos.constants";
import {ITodo} from "../components/todos/todos.model";

const initialState: ITodo[] = [ // todo: fetch this data
    {
        id: 0,
        completed: false,
        name: 'Learn to',
        description: 'react, redux'
    },
    {
        id: 1,
        completed: true,
        name: 'Install nodejs',
        description: 'on docker image'
    },
    {
        id: 2,
        completed: false,
        name: 'Call to Paul'
    }
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return action.payload.todo;
        case TOGGLE_TODO:
            if (state.id !== action.payload.todo.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, todoReducer(undefined, action)]
        }
        case REMOVE_TODO: {
            return [
                ...state.slice(0, action.payload.id),
                ...state.slice(action.payload.id + 1)
            ];
        }
        case TOGGLE_TODO: {
            return state.map(t => todoReducer(t, action));
        }
        default:
            return state;
    }
}
