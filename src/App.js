import React, { useEffect, useState, createContext } from "react";
import fire from "./comps1/fire";
import Homepage from "./comps1/Homepage";
import LoginScreen from "./comps1/LoginScreen";
export const values = createContext();
export const errorval = createContext();
export const loading = createContext();

function App() {
  const initialstate = "";
  const [email, setemail] = useState(initialstate);
  const [password, setpassword] = useState(initialstate);
  const [error, seterror] = useState("");
  const [user, setuser] = useState(initialstate);
  const [userdetails, setuserdetails] = useState({
    email: "",
  });
  const [loader, setloader] = useState(false);

  const authsignin = () => {
    setloader(true);
    seterror("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        setloader(false);
        console.log(data);
      })
      .catch((error) => {
        setloader(false);
        seterror(error.message);
      });
  };

  const togglelogin = () => {
    setloader(true);
    seterror("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
        setloader(false);
      })
      .catch((error) => {
        // Handle Errors here.
        setloader(false);
        seterror(error.message);
        console.log("error=", error.message);
        // ...
      });
  };

  const checkUser = async () => {
    await fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setuser(user);
      } else {
        setuser("");
      }

      if (user) {
        setuserdetails({
          ...userdetails,
          email: user.email,
        });
      }
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <values.Provider value={userdetails}>
        <errorval.Provider value={error}>
          <loading.Provider value={loader}>
            {user ? (
              <Homepage />
            ) : (
              <LoginScreen
                email={email}
                setemail={setemail}
                password={password}
                setpassword={setpassword}
                authsignin={authsignin}
                togglelogin={togglelogin}
                error={error}
                setloader={() => setloader(true)}
              />
            )}
          </loading.Provider>
        </errorval.Provider>
      </values.Provider>
    </>
  );
}

export default App;
