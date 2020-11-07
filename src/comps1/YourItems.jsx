import React, { useContext, useEffect, useState } from 'react'
import { values } from '../App'
import Card from './Card'
import fire from './fire'
import './Youritems.css'


function YourItems() {
    const val = useContext(values)
    const [youritems , setyouritems] = useState([])
    const [ loader ,set_loader ] = useState(false)
    const [ delete_Items ,set_delete_Items] = useState([])
   const [ search , setsearch] = useState('')
 


    
  

     const showitems = async () =>{
         await fire.firestore().collection('allitems').get().then( (datas) =>{
           const tempdata = []
           datas.forEach( async (alldata) =>{
          
              await tempdata.push({...alldata.data(),id:alldata.id})
                
               setyouritems([...tempdata])
           })
         })
     }
 

   const showdata = (e) =>{
       console.log(e)
       fire.firestore().collection('allitems').where('name','==',e.name)
       .get().then(datas =>{
           datas.forEach(data=>{
               data.ref.delete()
               set_loader(true)
               set_delete_Items([{...datas}])
           })
       })
       set_loader(false)
}

useEffect( () =>{
    showitems()
          },[delete_Items])

  
 
    return (
        <div className='your_item_cont'> 
         <input type='text' placeholder='search' className='search-input' value={search} onChange={(e)=>setsearch(e.target.value) } ></input>
        
               <div className='card_container'>

              { youritems.filter( data => data.username === val.email).map( datas =>
          
          <Card title={datas.name} key={datas.id} description={datas.description}  imgsrc={datas.img} date_time={datas.date_time} showmore={()=>showdata(datas)} btn_name= 'delete' />
                  )
              }
               </div>


        </div>
    )
}

export default YourItems
