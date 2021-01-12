import * as ActionTypes from './ActionTypes';



  
export const receiveQuestion1 = () => {
    return {
        type: ActionTypes.QUESTION1_SUCCESS
        
    }
}
  
export const Question1Error = (message) => {
    return {
        type: ActionTypes.QUESTION1_FAILURE,
        message
    }
}

export const postQuestion1 = (creds) => (dispatch) => {
   
   

    
        if (creds.select=="Delivery") {
           
            dispatch(receiveQuestion1());
          
        }
        else {
            var error = new Error('Error ' );
      
            dispatch( Question1Error(error.message));
        }
    
   
};
export const receiveQuestion2 = () => {
    return {
        type: ActionTypes.QUESTION2_SUCCESS
        
    }
}
  
export const Question2Error = (message) => {
    return {
        type: ActionTypes.QUESTION2_FAILURE,
        message
    }
}

export const postQuestion2 = (creds) => (dispatch) => {
  
   

   
    if (creds.select=="swiggy") {
        
        dispatch(receiveQuestion2());
      
    }
    else {
        var error = new Error('Error ' );

        dispatch( Question2Error(error.message));
    }
};
export const receiveQuestion3 = () => {
    return {
        type: ActionTypes.QUESTION3_SUCCESS
        
    }
}
  
export const Question3Error = (message) => {
    return {
        type: ActionTypes.QUESTION3_FAILURE,
        message
    }
}

export const postQuestion3 = (creds) => (dispatch) => {
   
   

   
    if (creds.select=="Mirinda"||creds.select=="Fanta") {
       
        dispatch(receiveQuestion3());
      
    }
    else {
        var error = new Error('Error ');
        
        dispatch( Question3Error(error.message));
    }
};