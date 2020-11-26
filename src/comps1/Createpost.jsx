import React, { useContext, useState } from "react";
import { values } from "../App";
import "./Createpost.css";
import fire from "./fire";
import { v4 as uuidv4 } from "uuid";

function Createpost() {
  const val = useContext(values);

  const initialstate = {
    title: "",
    description: "",
    imgurl: "",
    finalimgurl: false,
  };

  const [postdata, setpostdata] = useState(initialstate);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const postingitems = (e) => {
    const { name, value } = e.target;
    setpostdata({
      ...postdata,
      [name]: value,
    });
  };

  const imagepost = (e) => {
    setpostdata({
      ...postdata,
      imgurl: e.target.files[0],
    });
  };
  const post_to_database = async () => {
    setloading(true);
    await fire
      .storage()
      .ref(`images/${postdata.imgurl.name}`)
      .put(postdata.imgurl);

    await fire
      .storage()
      .ref("images")
      .child(`${postdata.imgurl.name}`)
      .getDownloadURL()
      .then((url) =>
        fire
          .firestore()
          .collection("allitems")
          .doc()
          .set({
            name: postdata.title,
            description: postdata.description,
            img: url,
            date_time: new Date().toDateString(),
            username: val.email,
            id: uuidv4(),
          })
          .then((data) => setloading(false))

          .then((err) => setloading(false))
      );

    setloading(false);
  };

  return (
    <div className="post-cont">
      <input
        type="text"
        className="inputs"
        placeholder="title"
        required
        onChange={postingitems}
        name="title"
      ></input>
      <textarea
        type="text"
        className="inputs"
        placeholder="description"
        onChange={postingitems}
        name="description"
      ></textarea>
      <input type="file" className="filechoose" onChange={imagepost}></input>
      <button type="button" className="button1" onClick={post_to_database}>
        {loading ? (
          <div
            className="spinner-border text-dark spinner-border-sm"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "submit"
        )}{" "}
      </button>
    </div>
  );
}

export default Createpost;
