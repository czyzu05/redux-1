import types from './types'

const add = movie => ({
    type: types.ADD_MOVIE,
    movie
})

const reset = () => ({
    type: types.RESET_MOVIES
})

export default {
    add,
    reset
}