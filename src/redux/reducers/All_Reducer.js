import fire from '../../comps1/fire'

const initialstate =[]



const SHOW_MORE = (state=initialstate,{type,payload})=>{
 switch(type){

     case 'SHOW_MORE': 
                    if (state===void 0){
                        return[
                            ...state
                        ]
                    }
                    else
                   return [
                       ...state,
                      {post: payload}
                   ]

                  break
     case 'LOG_OUT':  
              fire.auth().signOut()
               break
      
     case 'DEL_CART':
             const del_item=state.filter((post) => post.post.img!==payload.img)
             return [
                 ...del_item
             ]
 }
}


export default SHOW_MORE