export const deleteFavorite = (id) => {
  return {
    type: 'DELETE_FAVORITE',
     id
  }
} 

export const addFavorite = () => {
  return {
    type: 'ADD_FAVORITE',
  }
} 

export const loadFavorites = (resultFromApi) => {
  return {
    type: 'LOAD_FAVORITES',
    resultFromApi,
  }
}