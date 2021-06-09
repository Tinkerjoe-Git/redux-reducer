export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return ({...state,
                friends: [
                  ...state.friends,
                  action.friend
                ]}
            )
        case "REMOVE_FRIEND":
            const removefriendindex= state.friends.findIndex(friend=> friend.id===action.id);
            return (
                {...state, friends: 
                    [...state.friends.slice(0, removefriendindex),
                    ...state.friends.slice(removefriendindex+1, state.friends.length)]
                }
            )
        default:
            return state
    }
}
