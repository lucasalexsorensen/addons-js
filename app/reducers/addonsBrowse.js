import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, UPDATE_CATEGORIES_FILTER } from '../actions/addonsBrowse';

let initialState = {
  categoriesFilter: '',
  isFetching: false,
  items: []
};

let addonsBrowse = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_CATEGORIES:
          return Object.assign({}, state, {
            isFetching: true
          });
    case RECEIVE_CATEGORIES:
          return Object.assign({}, state, {
            isFetching: false,
            items: action.categories.sort((a, b) => {
              if (a.UICATTitle < b.UICATTitle) return -1;
              if (a.UICATTitle > b.UICATTitle) return 1;
              return 0;
            }),
            lastUpdated: action.receivedAt
          });
    case UPDATE_CATEGORIES_FILTER:
          return Object.assign({}, state, {
            categoriesFilter: action.text
          });
    default:
          return state;
  }
};

export default addonsBrowse;
