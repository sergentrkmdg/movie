
export const productReducer = (state={products:[]},action) => {
    switch(action.type) {
        case "GET_DATA":
            return {
                products:action.payload
            }
            default:
             return state

    }
        

}