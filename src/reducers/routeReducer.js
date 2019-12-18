// const initState = {
//   favorites: [
//     { idx:0, title:'moon1', 
//       img: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
//     },
//     { idx:1, title:'moon2', 
//       img: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
//     },
//     { idx:2, title:'moon3', 
//       img: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
//     }
//   ]
// }


const initState = {
  favorites: []
}

const routeReducer = (state = initState, action) => {
  if (action.type === 'DELETE_FAVORITE') {
    let newFavorites = state.favorites.filter(fav => action.id !== fav.idx);
    return {
      ...state,
      favorites: newFavorites
    }
  } if (action.type === 'ADD_FAVORITE') {
    let newIdx = state.favorites.length;
    let newFavorites = [...state.favorites];
    newFavorites.push({ idx:newIdx, title:`moon${newIdx + 1}`, 
    img: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
  }) 
    return {
      ...state,
      favorites: newFavorites 
    }
  } if (action.type === 'LOAD_FAVORITES') {
    console.log('LOADDING')
    let newFavorites = action.resultFromApi.resultFromApi;
    console.log(newFavorites);
      return {
        ...state,
        favorites: newFavorites
      }
    }
  return state;
}

export default routeReducer;