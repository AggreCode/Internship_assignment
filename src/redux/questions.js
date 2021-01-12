import * as ActionTypes from './ActionTypes';
export const Question = (state = {
   
    isAuthenticated1: false,
    isAuthenticated2: false,
    isAuthenticated3: false,
    isAuthenticated4: false,
    errMess: null
}, action) => {
switch (action.type) {
    case ActionTypes.QUESTION1_SUCCESS:
        return {...state,
             isAuthenticated1: true
             
        };
    case ActionTypes.QUESTION1_FAILURE:
        return {
      
            isAuthenticated1: false,
            errMess: action.message
           
        };
        case ActionTypes.QUESTION2_SUCCESS:
            return {...state,
                 isAuthenticated2: true,
                 
            };
        case ActionTypes.QUESTION2_FAILURE:
            return {
          
                isAuthenticated2: false,
                errMess: action.message
               
            };
            case ActionTypes.QUESTION3_SUCCESS:
                return {...state,
                     isAuthenticated3: true,
                     
                };
            case ActionTypes.QUESTION3_FAILURE:
                return {
              
                    isAuthenticated3: false,
                    errMess: action.message
                   
                };
               
    default:
        return state
}
}