import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";


const initialState={

  dishes:DISHES,
  comments:COMMENTS,
  sample:"Helloo"
}
export const Reducer=(state=initialState,action)=>{
  console.log("From Reducer:",action);
  if(action.type==='TEST'){
    return{
      ...state,
      sample:action.str

    }
  }
  return state;
}