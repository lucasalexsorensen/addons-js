import { UPDATE_INSTALLED_ADDONS_FILTER } from '../actions/filterInstalledAddons';

let initialState = '';

let filterInstalledAddons = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INSTALLED_ADDONS_FILTER:
          return action.filterText;
    default:
          return state;
  }
};

export default filterInstalledAddons;
