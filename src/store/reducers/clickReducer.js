const initState = {
    isPlaying:false
}

export default function clickReducer(state = initState,action){
    const {type} = action
    switch (type){
        case "isPlaying":
            return {
                ...state,
                isPlaying: !state.isPlaying
            }

        default:
            return state
    }
}