
export const AppReducer = (state , action) =>{

    switch(action.type){
        case "user-registraion":{
            return{
                ...state,
                userDatas:[ ...state.userDatas, action.payload]
            }
        }
        default:
            return state;
    }
}