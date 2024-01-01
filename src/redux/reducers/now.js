export const nowReducer = (state= {now:[]},action) => {
    switch(action.type) {
        case "GET_NOW":
            return {
                now:action.payload
            }
            default:
             return state

    }
        

}