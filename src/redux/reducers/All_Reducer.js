import fire from "../../comps1/fire";

const initialstate = [];

const All_Reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      if (state === initialstate) {
        return [...state, payload];
      } else {
        const different_item = state
          .filter((data) => data.img !== payload.img)
          .map((data) => console.log("diff", data));
        if (different_item.length!==0) {
          console.log("not empty", payload);
          return [...state, payload];
        }
      }
      break;

    case "LOG_OUT":
      fire.auth().signOut();
      break;

    case "DEL_CART":
      const del_item = state.filter((post) => post.img !== payload.img);
      return [...del_item];
  }
};

export default All_Reducer;
