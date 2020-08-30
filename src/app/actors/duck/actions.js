import types from './types'

const add = actor => ({
    type: types.ADD_ACTOR,
    actor
})

const reset = () => ({
    type: types.RESET_ACTORS
})

export default {
    add,
    reset
}