
    export const cardReducer = (state={cardItems:[]},action) => {
        switch(action.type) {
            case "ADD_CARD":
                return {
                    ...state,
                    cardItems:[
                        ...state.cardItems, action.payload
                    ]
                }
                case "REMOVE_CARD": 
                return {
                    cardItems: state.cardItems.filter(x=>x.id!==action.payload)
                }
                default:
                    return state
       
        }
    }