const initialState= {
  games: [
    {
      id: 1,
      name: "World of Warcraft: Legion",
      imageUrl: "WOWIcon.png",
      version: "Patch 7.0.3",
      installedAddons: [
        {
          id: 12995,
          iconUrl: "",
          name: "_NPCScan",
          status: "Up to Date",
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
      name: "Elder Scrolls Online",
      imageUrl: "TESOnlineIcon.png",
      version: "Version 2.4.3",
      installedAddons: [

      ]
    }
  ]
};

export default function gamesList(state = initialState, action) {
  return state;
}
