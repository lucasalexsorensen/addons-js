const initialState= {
  games: [
    {
      id: 1,
      name: "World of Warcraft: Legion",
      imageUrl: "file:///home/lucas/Pictures/WOWIcon.png",
      version: "Patch 7.0.3"
    },

    {
      id: 2,
      name: "Elder Scrolls Online",
      imageUrl: "file:///home/lucas/Pictures/TESOnlineIcon.png",
      version: "Version 2.4.3"
    }
  ]
};

export default function gamesList(state = initialState, action) {
  return state;
}
