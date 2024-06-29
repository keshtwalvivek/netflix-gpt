import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("true");
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigateTo = useNavigate();

  const handleButtonClick = (e) => {
    //validation the form data
    e.preventDefault();

    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name.current?.value
    );

    setErrorMessage(message);
    console.log(message);
    // if (!message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!

              navigateTo("/browes");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
          navigateTo("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigateTo("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <div>
        <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 bg-opacity-80 rounded-sm">
          <h1 className="font-bold text-3xl py-4 text-white">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="username"
              className="p-4 my-4 w-full bg-gray-700 rounded-sm  text-white"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="email"
            className="p-4 my-4 w-full bg-gray-700 rounded-sm text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-gray-700 rounded-sm text-white"
          />
          <p className="text-red-700 font-bold text-lg">{errorMessage}</p>

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-sm cursor-pointer"
            onClick={handleButtonClick}
          >
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already regisered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
