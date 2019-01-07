import axios from 'axios';

export const getdetailMovie = () => {
  return async (dispatch, getState) => {
    var action
    try {
      dispatch({ type: 'LOAD_UP'});
      const response = await axios.get('http://www.mocky.io/v2/5bab559f3000006800a68762')
      dispatch({ type: 'LOAD_DOWN'});
      action = { type: 'RECEIVE_DETAIL_MOVIE', payload: response.data }
    } catch (err) {
      dispatch({ type: 'LOAD_DOWN'});
      action = { type: 'RECEIVE_DETAIL_MOVIE_FAILURE', payload: {  } }
    }
    dispatch(action)
    }
    
  }



