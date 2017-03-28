/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
const setVisibilityFilter = (filter: string) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
            filter
        }
    }
};

export default {setVisibilityFilter};