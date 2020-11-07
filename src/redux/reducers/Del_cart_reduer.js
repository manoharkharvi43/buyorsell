const { useSelector } = require("react-redux")

const initialstate = []


const data = useSelector(state => state.SHOW_MORE)

const del_cart_reducer = (state=initialstate , {action , payload}) =>{
        if (action==='DEL_CART'){
                   return [
                       ...state ,

                   ]
        }
}