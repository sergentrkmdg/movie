
export const comingReducer = (state = {coming:[]},action) =>{
    switch (action.type) {
        case "GET_COME":
            return { 
                coming:action.payload
            }
        default:
            return state
    }

}