/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {todosReducer} from "./todos.reducer";
import TodosActions from '../actions/todos.action';
import {ITodo} from "../components/todos/todos.model";

const initialState: ITodo[] = [
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

test('should return initial state', () => {
    expect(todosReducer(undefined, {})).toEqual(initialState);
});

test('should return state with new todo element', () => {
    const newTodo: ITodo = {
        id: 2,
        name: 'New todo',
        completed: false
    };
    const addTodoAction = TodosActions.addTodo(newTodo);
    const expectedState = [...initialState, newTodo];
    expect(todosReducer(undefined, addTodoAction)).toEqual(expectedState);
});

test('should remove todo', () => {
    const removeTodoAction = TodosActions.removeTodo(0);
    const expectedState = initialState.filter(todo => todo.id !== 0);
    expect(todosReducer(undefined, removeTodoAction)).toEqual(expectedState);
});

test('should toggle todo', () => {
   const toggleTodoAction = TodosActions.toggleTodo(initialState[1]);
   const expectedState = initialState.map(todo => {
       if (todo.id === 1) {
           todo.completed = false
       }
       return todo;
   });
   expect(todosReducer(undefined, toggleTodoAction)).toEqual(expectedState);
});