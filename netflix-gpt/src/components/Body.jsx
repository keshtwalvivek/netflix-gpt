import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser(null));
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
