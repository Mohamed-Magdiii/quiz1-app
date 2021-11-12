import axios from 'axios'
import { 
    QUIZ_LOADED,
    QUIZ_UNLOADED
} from '../actions/types'

//Get All Questions
export const getAllQuizes = ()=>async dispatch =>{
    try {
        const res = await axios.get('http://localhost:4200/api/quiz')
         dispatch({
            type:QUIZ_LOADED,
            payload:res.data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type:QUIZ_UNLOADED,
        })
    }

}