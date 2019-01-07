const initialState = {detail: null  }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DETAIL_MOVIE':
      return {...state, detail : action.payload}
    case 'RECEIVE_DETAIL_MOVIE_FAILURE' :
      return {...state , detail: null}
    default:
      return state

  }
}
