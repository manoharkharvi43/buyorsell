import fire from '../../comps1/fire'

const initialstate =[]

const All_Reducer = (state=initialstate,{type,payload})=>{
 switch(type){

     case 'ADD_CART': 
                   return [
                       ...state,
                      {post: payload}
                   ];
                  break
     case 'LOG_OUT':  
              fire.auth().signOut()
               break
      
     case 'DEL_CART':
             const del_item=state.filter((post) => post.post.img!==payload.post.img)
             return [
                 ...del_item
             ]
 }
}


export default All_Reducer