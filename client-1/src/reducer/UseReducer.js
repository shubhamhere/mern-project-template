export const initialState = null;

export const reducer = (state, action)=>{   //action will be triggered by  
    if (action.type === "USER") {  
        return action.payload;
    }
    return state;
}
