import React from 'react'
import { createStore } from 'redux'
import './App.css'

const initialMovies = {
  listName: 'Movies',
  movies: [
    'Rambo', 'Hakerzy', 'Matrix'
  ]
}

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, movies: [...state.movies, action.movie] }
    case 'RESET':
      return { ...movies, movies: [] }
    default:
      return state
  }
}

const store = createStore(movies)
window.store = store

function App() {
  return (
    <div className="App">

    </div>
  )
}

export default App;
