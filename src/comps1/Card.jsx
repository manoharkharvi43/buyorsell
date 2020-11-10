import React from 'react'
import './Card.css'




function Card(props) {
  
    const {imgsrc , title , description , date_time,showmore,btn_name} = props
  
 

    const showmore_item = () =>{
        showmore();      
    }

   
    
 
    return (
        <>
            <div className="cont1"  >
                <div className='img-container'>
            <img src={imgsrc} alt="loading"></img>
            </div>
            
            <div className="title"> <h4>{title}  </h4></div>
           <div className="content"> <h6 style={{wordBreak:"break-all"}}> 
          {description}
        
    < p><small>{date_time}</small></p>
             </h6>
    <button className='btn button-outline btn-success' style={{width:"100%"}} onClick={showmore_item} >{btn_name}</button>
             </div>
          
         
            
  
           </div>
        </>
    )
}

export default Card
