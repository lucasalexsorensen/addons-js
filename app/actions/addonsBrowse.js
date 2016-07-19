export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const UPDATE_CATEGORIES_FILTER = 'UPDATE_CATEGORIES_FILTER';

export const REQUEST_ALL_ADDONS = 'REQUEST_ALL_ADDONS';
export const RECEIVE_ALL_ADDONS = 'RECEIVE_ALL_ADDONS';
export const UPDATE_ALL_ADDONS_FILTER = 'UPDATE_ALL_ADDONS_FILTER';


export function requestCategories(gameName){
  return {
    type: REQUEST_CATEGORIES,
    gameName
  };
}

export function receiveCategories(gameName, json){
  return {
    type: RECEIVE_CATEGORIES,
    gameName,
    categories: json,
    receivedAt: Date.now()
  };
}

export function fetchCategories(gameName){
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`https://api.mmoui.com/v3/game/${gameName}/categorylist.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveCategories(gameName, json))
      })
  }
}

export function updateCategoriesFilter(text){
  return {
    type: UPDATE_CATEGORIES_FILTER,
    text
  }
}


export function requestAll(gameName){
  return {
    type: REQUEST_ALL_ADDONS,
    gameName
  };
}

export function receiveAll(gameName, json){
  return {
    type: RECEIVE_ALL_ADDONS,
    gameName,
    addons: json,
    receivedAt: Date.now()
  };
}

export function fetchAll(gameName){
  return dispatch => {
    dispatch(requestAll())
    return fetch(`https://api.mmoui.com/v3/game/${gameName}/filelist.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveAll(gameName, json))
      })
  }
}

export function updateAllFilter(text){
  return {
    type: UPDATE_ALL_ADDONS_FILTER,
    text
  }
}


