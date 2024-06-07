import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState("true");

  const handleSignIn = () => {
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
              type="text"
              placeholder="username"
              className="p-4 my-4 w-full bg-gray-700 rounded-sm"
            />
          )}

          <input
            type="email"
            placeholder="email"
            className="p-4 my-4 w-full bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-gray-700 rounded-sm"
          />

          <button className="p-4 my-6 bg-red-700 w-full rounded-sm cursor-pointer">
            {" "}
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={handleSignIn}>
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
