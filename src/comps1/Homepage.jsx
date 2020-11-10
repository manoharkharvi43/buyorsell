import React  from 'react'
import './Homepage.css'
import Createpost from './Createpost'
import {Link , Route , Switch } from 'react-router-dom'
import Allpost from './Allpost'
import Settings from './Settings'
import {GrCart} from 'react-icons/gr'
import Cart from './Cart'
import YourItems from './YourItems'
import { useSelector } from 'react-redux'


function Homepage(props) {


    const cart_number = useSelector(state=>state)
      if(cart_number){
          console.log('cart_no',cart_number.length)
      }
    return (
       <>
           <div className="home-container">
               <div className='margin_container'> 
                   <div className='header'>
                      <h3>BuyOrSell</h3>
                   </div>
                    <div className="log-out-container">   
                       <span className="badge badge-success" 
                         id='cart_number'>
                        {cart_number? cart_number.length!==0 ? cart_number.length:null:null}
                        </span> 
                         <Link to="/cart" className="icon-div">
                             <GrCart className="cart-icon"  /></Link> 
                    </div>
               </div>

           <div className="button-container" >
             <Link to="/">  <button type="button" className="all_post_btn" id='allpost_id' >All-items</button></Link> 
             <Link to="/sellitems"> <button type="button" className="all_post_btn" >Sell-items</button></Link>   
              <Link to="/settings">  <button type="button" className="all_post_btn" >setting</button></Link>
           </div>

           <Switch>
               <Route exact path="/" ><Allpost/> </Route>
               <Route path="/sellitems" component={Createpost}></Route>
               <Route path="/settings"><Settings/></Route>
               <Route path="/cart" component={Cart}></Route>
               <Route path='/youritems' component={YourItems}></Route>
           </Switch>

           </div>





   
         </>
        
      
    )
}

export default Homepage
