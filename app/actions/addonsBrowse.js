export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const UPDATE_CATEGORIES_FILTER = 'UPDATE_CATEGORIES_FILTER';

export function requestCategories(gameId){
  return {
    type: REQUEST_CATEGORIES,
    gameId
  };
}

export function receiveCategories(gameId, json){
  return {
    type: RECEIVE_CATEGORIES,
    gameId,
    categories: json,
    receivedAt: Date.now()
  };
}

export function fetchCategories(gameId){
  return dispatch => {
    dispatch(requestCategories())
    return fetch("https://api.mmoui.com/v3/game/WOW/categorylist.json")
      .then(response => response.json())
      .then(json => {
        dispatch(receiveCategories(gameId, json))
      })
  }
}

export function updateCategoriesFilter(text){
  return {
    type: UPDATE_CATEGORIES_FILTER,
    text
  }
}
