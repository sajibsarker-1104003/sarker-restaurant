import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";


const initialState={

  dishes:DISHES,
  comments:COMMENTS,
  sample:"Helloo"
}
export const Reducer=(state=initialState,action)=>{
  //console.log("From Reducer:",action);
  if(action.type==='ADD_COMMENT'){
     let comment=action.payload;
     //console.log(comment);
     comment.id=state.comments.length;
     comment.date=new Date().toDateString();
     return{
      ...state,
      comments: state.comments.concat(comment)
     }
  }
  return state;
}