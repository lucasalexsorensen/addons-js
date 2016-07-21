import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, UPDATE_CATEGORIES_FILTER, UPDATE_CATEGORY_PAGE_FILTER, REQUEST_ALL_ADDONS, RECEIVE_ALL_ADDONS, UPDATE_ALL_ADDONS_FILTER } from '../actions/addonsBrowse';
import _ from 'underscore';

let initialState = {
  categories: {
    filter: '',
    pageFilter: '',
    isFetching: false,
    items: []
  },

  all: {
    filter: '',
    isFetching: false,
    items: [],
    categorized: []
  }
};

let addonsBrowse = (state = initialState, action) => {
  switch (action.type) {
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
                /* if (a.UICATTitle < b.UICATTitle) return -1;
                if (a.UICATTitle > b.UICATTitle) return 1;*/
            return a.UICATID - b.UICATID;
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
    case UPDATE_CATEGORY_PAGE_FILTER:
      return {
        ...state,
        categories: {
          ...state.categories,
          pageFilter: action.text
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
          items: action.items.sort((a, b) => {
            a.UIDownloadTotal - b.UIDownloadTotal;
          }),
          categorized: _.groupBy(action.items, (obj) => { return obj.UICATID; }),
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
