import types from './types'

const INITIAL_STATE = {
    listName: 'Actors',
    list: [
        'Tom Hanks', 'Julia Roberts', 'Natalie Portman'
    ]
}


const actorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ACTOR:
            return { ...state, list: [...state.list, action.actor] }
        case types.RESET_ACTORS:
            return { ...state, list: [] }
        default:
            return state
    }
}

export default actorsReducer