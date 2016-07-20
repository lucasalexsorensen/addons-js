import { ADD_GAME_TO_LIST, REMOVE_GAME_FROM_LIST } from '../actions/installationsList';

const installations = [
  {
    id: 0,
    gameId: 0,
    disabled: false,
    name: 'WOW1',
    path: 'C:/Program Files/World of Warcraft',
    installedAddons: [
      {
        id: 12995,
        iconUrl: '',
        name: '_NPCScan',
        status: 'Update available',
        latestVersion: '5.0.0.5',
        downloads: 734506
      },

      {
        id: 4459,
        iconUrl: '',
        name: 'Bagnon',
        status: 'Up to Date',
        latestVersion: '5.4.15',
        downloads: 1710241
      }
    ]
  },

  {
    id: 1,
    gameId: 1,
    disabled: false,
    name: 'ESO1',
    path: 'C:/Bethesda Studios/TESO',
    installedAddons: []
  }
];

const initialState = installations;

let installationsList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME_TO_LIST:
      return [...state, {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        gameId: action.game.gameId,
        name: action.game.name,
        disabled: action.game.disabled,
        path: action.game.path,
        installedAddons: []
      }];
    case REMOVE_GAME_FROM_LIST:
      return [...state.slice(0, action.gameId), ...state.slice(action.gameId + 1)];
    default:
      return state;
  }
};

export default installationsList;
