import React, { useContext, useState } from 'react'
import { values } from '../App'
import Avatar from 'react-avatar';
import './Setting.css'
import { Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import LOGOUT from '../redux/actions/log_out_action'

function Settings(props) {
    const dispatch = useDispatch()
    const val = useContext(values)
    const [show , setshow] = useState(false)
    const history = useHistory()

    const  link_to_youritems =() =>{
history.push('/youritems')
    }


    return (
        <div>
          <div className="setting-container">
       <Avatar name={val.email}  skypeId="sitebase" size="50" round={true} title={val.email} />
       <br/>
        <h6 style={{marginTop:"20px"}}>{ val.email}</h6>
        </div>
        <div className="setting-your-items" onClick={link_to_youritems}>
           <Link to="/youritems" style={{ textDecoration: 'none' }}></Link><h6 style={{cursor:'pointer'}}>Your-Items</h6>
        </div>
        <div className='log-out-btn'>
                 <button className='btn btn-outline-secondary' id='btn-btn' onClick={() =>{dispatch(LOGOUT())}}>log-out</button>
        </div>
        </div>
    )
}

export default Settings
