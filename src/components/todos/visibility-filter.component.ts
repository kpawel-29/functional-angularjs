/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {INgRedux} from 'ng-redux';
import VisibilityFiltersActions from '../../actions/visibility-filters.actions';

export class VisibilityFilterController implements angular.IController {
    static $inject = ['$ngRedux'];

    unsubscribe: Function;

    constructor(private $ngRedux: INgRedux) {
        this.unsubscribe = $ngRedux.connect((state) => {
            const {todos, visibilityFilters} = state;
            return {todos, visibilityFilters};
        }, VisibilityFiltersActions)(this);
    }
}

export const VisibilityFilterComponent: angular.IComponentOptions = {
    template: require('./visibility-filter.component.html'),
    controller: VisibilityFilterController
};
