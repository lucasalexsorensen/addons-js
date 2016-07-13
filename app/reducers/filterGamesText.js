import { UPDATE_MYGAMES_FILTER} from '../actions/filterGames';

let initialState = '';

let filterGamesText = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MYGAMES_FILTER:
          return action.filterText;
    default:
          return state;
  }
};

export default filterGamesText;
