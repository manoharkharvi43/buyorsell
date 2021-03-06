import React, { useEffect, useState } from "react";
import { values } from "../App";
import Card from "./Card";
import { db } from "./fire";
import "./Allpost.css";
import { useDispatch } from "react-redux";
import add_cart from "../redux/actions/add_cart_action";
import { useHistory } from "react-router-dom";

function Allpost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [cart_popup, set_cart_popup] = useState(false);
  const val = useState(values);
  const [postitems, setpostitems] = useState([]);
  const [search, setsearch] = useState("");

  const items = () => {
    db.collection("allitems")
      .get()
      .then((snapshot) => {
        const posteddata = [];
        snapshot.forEach((alldocs) => {
          posteddata.push({ ...alldocs.data() });
          setpostitems([...posteddata]);
        });
      });
  };
  const showmoreitem = (data) => {
    dispatch(add_cart(data));
    console.log(data);
  };

  const showitemdetails = () => {
    history.push("/items");
  };
  useEffect(() => {
    items();
  } , []);

  return (
    <>
      <div className="allpost-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        ></input>
        <div className="div-container"  style={{
          width:"100%"
        }}>
          {postitems && postitems
            .filter(
              (data) =>
                data.name.includes(search) || data.description.includes(search)
            )
            .map((datas) => (
              <>
                <Card
                  className="card-name"
                  title={datas.name}
                  key={datas.id}
                  description={datas.description}
                  imgsrc={datas.img}
                  date_time={datas.date_time}
                  showmore={() => showmoreitem(datas)}
                  btn_name="Add to Cart"
                  fullscreenitem={() => showitemdetails(datas)}
                  id={datas.id}
                />
              </>
            ))}
        </div>

        {cart_popup ? (
          <div className="pop_over">
            <h6> successfully added to cart</h6>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Allpost;
