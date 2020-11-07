import React, { useEffect ,useRef,useState} from 'react'
import './Homepage.css'
import Createpost from './Createpost'
import {Link , Redirect, Route , Switch } from 'react-router-dom'
import Allpost from './Allpost'
import Settings from './Settings'
import {GrCart} from 'react-icons/gr'
import Cart from './Cart'
import YourItems from './YourItems'
import ShowMore from './ShowMore'


function Homepage(props) {
    return (
       <>
           <div className="home-container">
               <div className='margin_container'> 
               <div className='header'>
            <h3>BuyOrSale</h3>
               </div>
               <div className="log-out-container">    
              <Link to="/cart" className="icon-div"><GrCart className="cart-icon"  /></Link> 
               </div>
               </div>

           <div className="button-container">
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
               <Route path='/showmore' component={ShowMore}></Route>
           </Switch>

           </div>





   
         </>
        
      
    )
}

export default Homepage
