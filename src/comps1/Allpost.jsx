import React, {  useEffect, useState } from 'react'
import { values } from '../App'
import Card from './Card'
import fire from './fire'
import {db} from './fire'
import './Allpost.css'
import { useDispatch } from 'react-redux'
import add_cart from '../redux/actions/show_more_action'



function Allpost() {
   
   const dispatch = useDispatch()
   const [cart_popup , set_cart_popup]=useState(false)
  const val = useState(values)
  const [postitems , setpostitems] = useState([])
  const [ search , setsearch] = useState('')
 
const items = () =>{
  db.collection('allitems').get().then( (snapshot) => {
    const posteddata = []
    snapshot.forEach((alldocs) =>{
       posteddata.push({...alldocs.data()})
      setpostitems([...posteddata])
    })
    });
  };
 
  
          const showmore = (data) =>{
        console.log(data)
        dispatch(add_cart(data))

          }



          useEffect(() =>{
            items()
            
          })


    return (
      <>
      
        <div className="allpost-container">
           <input type='text' placeholder='search' className='search-input'value={search}  onChange={(e) => setsearch(e.target.value)} ></input>
         <div className='div-container'> 
            {  postitems.filter(data =>
             ( data.name.toLowerCase().includes(search.toLowerCase()))||
             ( data.description.toLowerCase().includes(search.toLowerCase()))
            ).map(datas =>  
              datas.length===0 ?<h3>no results found</h3>:
            <>
            <Card className='card-name'
            key={datas.length}
             title={datas.name}
              key={datas.id}
              description={datas.description} 
              imgsrc={datas.img}
               date_time={datas.date_time}
               showmore={()=>showmore(datas) }
               btn_name='Add to Cart' />
            </>     
            )
            }

        </div>
                
            {  cart_popup ? <div className='pop_over'>
                  <h6> successfully added to cart</h6>
            </div>:null}

</div>

 
    
        </>
    )
}

export default Allpost
