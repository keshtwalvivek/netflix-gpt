import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState("true");
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    //validation the form data
    e.preventDefault();

    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setErrorMessage(message);
    console.log(message);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
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
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
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
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Mow"
              : "Already regisered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
