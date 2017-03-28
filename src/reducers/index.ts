/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {combineReducers} from 'redux';
import {todosReducer} from './todos.reducer';
import visibilityFiltersReducer from './visibility-filter.reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilters: visibilityFiltersReducer
});

export default rootReducer;