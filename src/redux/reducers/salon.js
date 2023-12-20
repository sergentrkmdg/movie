export const salonReducer = (state={salon:false},action)=> {
    switch(action.type) {
        case "SALON_AC" : 
        return {
            salon:action.payload
        }
        default:
            return state
    }


}