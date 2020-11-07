import { combineReducers } from 'redux'
import logoutreducer from '../reducers/Logout_reducer'
import SHOW_MORE from '../reducers/Show_more_red'


const combined_reducers = () => combineReducers(
    {logoutreducer,
       SHOW_MORE}
    )


export default combined_reducers