import { combineReducers } from 'redux'
import actorsReducer from './app/actors/duck'
import moviesReducer from './app/movies/duck'

const rooReducer = combineReducers({
    actors: actorsReducer,
    movies: moviesReducer
})

export default rooReducer