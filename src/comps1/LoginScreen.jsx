import React, { useContext, useState } from 'react'
import { errorval } from '../App'
import './LoginScreen.css'

function LoginScreen(props) {
    const ref = useContext(errorval)
    const {email,setemail,password, setpassword ,authsignin ,togglelogin} = props
 const[pass_show  , setpass_show]= useState('password')
    const [ toggle , settoggle] = useState(false)


    const toggleevent = () =>{
        settoggle(!toggle)
    }

    const passshow =()=>{
setpass_show('text')

    }


    return (
        <div className="login-container">


            <div className='login-container1'>
                <div className="error-container">
    <p className="login-error">{ref}</p>
                </div>


              <div className="input-container">
                  <input className="login-input-container" type='text' placeholder="email"  name="email" value={email} onChange={(e) =>setemail(e.target.value) }/>
             </div>

                  <div className="input-container2">
                  <input className="login-input-container" placeholder="password" type={pass_show} name="password" value={password} onChange={(e) =>setpassword(e.target.value)}  />
                  <button onClick={passshow}>password-show</button>
                  </div>
                 
                {toggle ?    <div className="login-btn-container">
                 <button className='input-login' onClick={authsignin}>Sign-up</button>
                 <p>dont have a account? <span onClick={toggleevent}  style={{cursor:"pointer" , color:"dodgerblue"}}>login</span></p>
                 </div>  :  
                        <div className="login-btn-container">
                        <button className='input-login' onClick={togglelogin}>Log-in</button>
                        <p> already have an account? <span onClick={toggleevent} style={{cursor:"pointer" , color:"dodgerblue"}}>sign-up</span></p>
                        </div> }

               
              </div>
         
        </div>
    )
}

export default LoginScreen
