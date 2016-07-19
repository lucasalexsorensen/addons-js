import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, UPDATE_CATEGORIES_FILTER, REQUEST_ALL_ADDONS, RECEIVE_ALL_ADDONS, UPDATE_ALL_ADDONS_FILTER } from '../actions/addonsBrowse';

let initialState = {
  categories: {
    filter: '',
    isFetching: false,
    items: []
  },

  all: {
    filter: '',
    isFetching: false,
    items: []
  }
};

let addonsBrowse = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_CATEGORIES:
          return {
            ...state,
            categories: {
              ...state.categories,
              isFetching: true
            }
          };
    case RECEIVE_CATEGORIES:
          return {
            ...state,
            categories: {
              ...state.categories,
              isFetching: false,
              items: action.categories.sort((a, b) => {
                if (a.UICATTitle < b.UICATTitle) return -1;
                if (a.UICATTitle > b.UICATTitle) return 1;
                return 0;
              }),
              lastUpdated: action.receivedAt
            }
          };
    case UPDATE_CATEGORIES_FILTER:
          return {
            ...state,
            categories: {
              ...state.categories,
              filter: action.text
            }
          };


    case REQUEST_ALL_ADDONS:
      return {
        ...state,
        all: {
          ...state.all,
          isFetching: true
        }
      };
    case RECEIVE_ALL_ADDONS:
      return {
        ...state,
        all: {
          ...state.all,
          isFetching: false,
          items: action.addons,
          lastUpdated: action.receivedAt
        }
      };
    case UPDATE_ALL_ADDONS_FILTER:
      return {
        ...state,
        all: {
          ...state.all,
          filter: action.text
        }
      };
    default:
          return state;
  }
};

export default addonsBrowse;
