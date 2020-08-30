import React from 'react'
import { createStore, combineReducers, bindActionCreators } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './App.css'

const initialMovies = {
  listName: 'Movies',
  list: [
    'Rambo', 'Hakerzy', 'Matrix'
  ]
}

const initialActors = {
  listName: 'Actors',
  list: [
    'Tom Hanks', 'Julia Roberts', 'Natalie Portman'
  ]
}

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return { ...state, list: [...state.list, action.movie] }
    case 'RESET_MOVIES':
      return { ...state, list: [] }
    default:
      return state
  }
}

function actors(state = initialActors, action) {
  switch (action.type) {
    case 'ADD_ACTOR':
      return { ...state, list: [...state.list, action.actor] }
    case 'RESET_ACTORS':
      return { ...state, list: [] }
    default:
      return state
  }
}

const allReducers = combineReducers({ movies, actors })

const store = createStore(allReducers, composeWithDevTools())

const addActor = actor => ({ type: 'ADD_ACTOR', actor })
store.dispatch(addActor('Cezary Pazura'))

const actorsActions = bindActionCreators({ add: addActor }, store.dispatch)
actorsActions.add('Jan Frycz')

window.store = store

function App() {
  return (
    <div className="App">

    </div>
  )
}

export default App;
