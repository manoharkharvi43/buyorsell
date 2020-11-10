import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import del_cart from '../redux/actions/delete_cart_action'
import Card from './Card'
import './Cart.css'


function Cart() {
const dispatch =useDispatch()

const cart_data = useSelector(state =>state)
useEffect( ()=>{
console.log('cart',cart_data)
})


const card_data = (data) =>{
    dispatch(del_cart(data))
    console.log(data)
}
    return (
        <div className='cart_container'>
            
           <div className="item_container">
            {cart_data ? (cart_data.length===0)  ? <h3> your cart is empty</h3> : cart_data.map( datas =>
                 <>
                   <Card className='card-name'
                    title={datas.post.name} 
                   key={datas.post.id}
                    description={datas.post.description} 
                    imgsrc={datas.post.img}
                     date_time={datas.post.date_time}
                    showmore={()=>card_data(datas)}
                      btn_name='Remove  from Cart' />
             </>
             ):<h3>your cart is empty</h3>}  

      

           </div>
        </div>
    )
}

export default Cart
