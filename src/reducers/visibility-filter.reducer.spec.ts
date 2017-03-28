/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import configureStore from 'redux-mock-store';
import VisibilityFilterActions from '../actions/visibility-filters.actions';

const mockStore = configureStore([]);

const initialState = {
    todos: [
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
    ],
    visibilityFilters: "SHOW_ALL"
};

test('should return all todos', () => {
    const store = mockStore(initialState);
    const showAllAction = VisibilityFilterActions.setVisibilityFilter('SHOW_ALL');
    store.dispatch(showAllAction);
    expect(store.getState()).toEqual(initialState);

    const actions = store.getActions();
    expect(actions).toEqual([showAllAction]);
});

test.skip('should return only completed todos', done => { // todo: fixme
    const showCompletedAction = VisibilityFilterActions.setVisibilityFilter('SHOW_COMPLETED');
    const store = mockStore(initialState, [showCompletedAction], done);
    //expect(store.getState().visibilityFilters).not.toEqual('SHOW_COMPLETED');

    store.dispatch(showCompletedAction);
});