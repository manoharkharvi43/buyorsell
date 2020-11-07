import fire from '../../comps1/fire'


const logoutreducer = (state, action)=>{
   
  switch(action.type){
  case 'LOG_OUT': 
                fire.auth().signOut()
        

  }
}


export default logoutreducer
