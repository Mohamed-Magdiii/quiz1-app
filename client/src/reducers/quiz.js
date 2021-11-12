import { 
    QUIZ_LOADED,
    QUIZ_UNLOADED
} from '../actions/types'

const initialState = {
        quiz:null,
}

export default function quizFun(state=initialState,action){
     const {type , payload } = action
     switch(type){
         case QUIZ_LOADED:
             return{
                 ...state,
                 quiz:payload,   
             }
            //  case QUIZ_UNLOADED:
            //  return{
            //      ...state,
            //      quiz:null,   
            //  }
             default : 
             return state
     }
}