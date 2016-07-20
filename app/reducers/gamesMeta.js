const initialState = [
  { // Game with #0
    name: 'World of Warcraft',
    imageUrl: 'WOWIcon.png',
    suggestedPaths: [
      'C:/Program Files/World of Warcraft'
    ],
    version: '6.2.0'
  },

  { // Game with #1
    name: 'The Elder Scrolls Online',
    imageUrl: 'TESOnlineIcon.png',
    suggestedPaths: [
      'C:/Bethesda Studios/TESO'
    ],
    version: '2.4.3'
  }
];

let gamesMeta = (state = initialState, action) => {
  return state;
};

export default gamesMeta;
