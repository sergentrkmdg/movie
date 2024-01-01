
export const topReducer = (state= {top:[]}, action)=> {
    switch(action.type) {
        case "GET_TOP":
            return {
                top:action.payload
            }            
        default:
         return  state
    }
}