export function managePresents(state, action){
    state={
        numberOfPresents: 0
    }
      switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, 
        {numberOfPresents: state.numberOfPresents + 1})

    default:
      return state
  }
} 
