import React,{useEffect, useState,useContext, createContext} from 'react';


import fire from './comps1/fire'
import auth from 'firebase/auth'
import Homepage from './comps1/Homepage'
import LoginScreen from './comps1/LoginScreen'
export const values = createContext() 
 export const errorval = createContext() 

function App() {
  const initialstate = ''
  const [ email ,setemail] = useState(initialstate)
const [password, setpassword] = useState(initialstate)
const[signinpressed , setsigninpressed] = useState(false)
const [ error , seterror] = useState("")
const [ user , setuser] = useState(initialstate)
const [userdetails , setuserdetails] = useState({
  email:""
})




const authsignin = () =>{
    seterror('')
  fire.auth().createUserWithEmailAndPassword(email, password).
  then(data =>{
    console.log(data)
  }).
  catch((error) => {
    // Handle Errors here.
     seterror(error.message)
    //  console.log('error=', error.message)
    // ...
  }); 
  }

const togglelogin =() =>{

  seterror('')
  fire.auth().signInWithEmailAndPassword(email,password)
  .then(data => console.log(data))
  .catch((error) => {
    // Handle Errors here.
     seterror(error.message)
     console.log('error=', error.message)
    // ...
  }); 

 
}


const checkUser = async () =>{
  await fire.auth().onAuthStateChanged((user) =>{
    if(user){
      setuser(user)
    }else{
      setuser("")
    }
     setuserdetails({
      ...userdetails,
      email:user.email
    })
  })
}


// const userlogout = () =>{
//   fire.auth().signOut()
//   setemail(initialstate)
//   setpassword(initialstate)
// }


  
useEffect(() =>{
  checkUser();
 

},[])


  return (
   

    <>
    <values.Provider value={userdetails}>
      <errorval.Provider value={error}>
    { user ? <Homepage /> :  <LoginScreen email={email} 
   setemail={setemail}
    password={password} 
    setpassword={setpassword} 
    authsignin={authsignin}
    togglelogin={togglelogin} 
    error={error} />}
    
    </errorval.Provider>
    </values.Provider>
    </>
  );
}

export default App ;


 