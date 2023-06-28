
const initialState={
    list:[]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_LIST':
            return{
                ...state,
                list:action.payload,

            };

            case "ADD_CART":
                console.log("action", action);
                let selected = state.list.find((i) => i?.id === action.payload)
                selected.isCart = true;
                console.log(selected);
                return{
                    ...state,
                   list: state.list.map((i) => (i?.id === action.payload? selected:i))
                }
               case "DELETE":
                console.log("action",action);
                return{
                    ...state,
                    list: state.list.filter((i)=> i?.id !== action.payload),
                }

            default:
                return{
                    ...state,
                }
    }
}

export default cartReducer;