import { ADD_GAME_TO_LIST, REMOVE_GAME_FROM_LIST } from '../actions/gamesList';

const games = [
  {
    id: 1,
    disabled: false,
    name: "World of Warcraft: Legion",
    imageUrl: "WOWIcon.png",
    version: "Patch 7.0.3",
    path: "C:/Program Files/World of Warcraft",
    installedAddons: [
      {
        id: 12995,
        iconUrl: "",
        name: "_NPCScan",
        status: "Update available",
        latestVersion: "5.0.0.5",
        downloads: 734506
      },

      {
        id: 4459,
        iconUrl: "",
        name: "Bagnon",
        status: "Up to Date",
        latestVersion: "5.4.15",
        downloads: 1710241
      }
    ]
  },

  {
    id: 2,
    disable: false,
    name: "Elder Scrolls Online",
    imageUrl: "TESOnlineIcon.png",
    version: "Version 2.4.3",
    path: "C:/Bethesda Studios/TESO",
    installedAddons: []
  }
];

const initialState = games;

let gamesList = (state = initialState, action) => {
  switch (action.type){
    case ADD_GAME_TO_LIST:
          return [...state, action.game];
    case REMOVE_GAME_FROM_LIST:
          console.log("hello");
          return state;
    default:
          return state;
  }
}

export default gamesList;
