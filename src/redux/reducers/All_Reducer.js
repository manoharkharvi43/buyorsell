import fire from '../../comps1/fire'

const initialstate =[]

const All_Reducer = (state=initialstate,{type,payload})=>{
 switch(type){

     case 'ADD_CART': 
             if(state !== [])
             {
                 const cart_data = state.filter(data=>data.post.img !== payload.img)
                 if(cart_data){
                     return [
                         ...state,
                        {post: payload}
                     ];
                 }
             }
             else {
                 return [
                     ...state
                 ]
             }
        
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