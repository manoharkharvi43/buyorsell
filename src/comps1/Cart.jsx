import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import del_cart from "../redux/actions/delete_cart_action";
import Card from "./Card";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart_data = useSelector((state) => state);
  useEffect(() => {
    console.log("cart", cart_data);
  });
  const showitemdetails = () => {
    history.push("/items");
  };

  const card_data = (data) => {
    dispatch(del_cart(data));
    console.log(data);
  };
  return (
    <div className="cart_container">
      <div className="item_container">
        {cart_data ? (
          cart_data.length === 0 ? (
            <h3> your cart is empty</h3>
          ) : (
            cart_data.map((datas) => (
              <>
                <Card
                  className="card-name"
                  title={datas.name}
                  key={datas.id}
                  description={datas.description}
                  imgsrc={datas.img}
                  date_time={datas.date_time}
                  showmore={() => card_data(datas)}
                  btn_name="Remove  from Cart"
                  fullscreenitem={() => showitemdetails(datas)}
                  id={datas.id}
                />
              </>
            ))
          )
        ) : (
          <h3>your cart is empty</h3>
        )}
      </div>
    </div>
  );
}

export default Cart;
