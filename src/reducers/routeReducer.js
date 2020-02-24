const initState = {
  apollo_feed: [],
  apollo_favorites:[]
}

const routeReducer = (state = initState, action) => {
  if (action.type === 'DELETE_FAV') {
    let newFavorites = state.apollo_favorites.filter((fav, idx) => action.idx === idx)
    console.log(newFavorites)
    return {
      ...state,
      apollo_favorites: newFavorites
    }
  } if (action.type === 'ADD_FAVORITE') {
    let newFavList = [...state.apollo_favorites];
    newFavList.push(action.idx)
    return {
      ...state,
      apollo_favorites: newFavList
    }
  } if (action.type === 'LOAD_APOLLO') { 
      return {
        ...state,
        apollo_feed: action.api
      }
    }
  return state;
}

export default routeReducer;