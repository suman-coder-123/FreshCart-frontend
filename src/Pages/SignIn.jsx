import React, { useState } from "react";
import freshcart from "../assets/Images/freshcart.svg";
import Signin from "../assets/Images/Signin.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const SignIn = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      const updated = { ...prevData, [name]: value };
      return updated;
    });
  };

  let go = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://freshcart-backend-do1f.vercel.app/signin", { loginData }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          text: "Sigin success",
          icon: "success",
        });
        go("/");

      } else {
        Swal.fire({
          icon: "error",
          title: "invalid user",
        });
      }
    });
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-20 py-3 font-medium text-[#21313c] shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
        <div className="mb-3 md:mb-0">
          <img src={freshcart} alt="logo" className="h-8 md:h-10" />
        </div>
        <div className="flex items-center gap-1 text-sm md:text-base ">
          <p>Already have an account? </p>
          <Link to="/registration" className="text-[#0aad0a] hover:underline">
            Sign up{" "}
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 mb-20  xl:mt-2 bg-white">
        <div className="flex flex-col-reverse  md:flex-row lg:flex-row  max-w-6xl w-full items-center">
          <div className=" flex w-1/2 justify-center  ">
            <img
              src={Signin}
              alt="image"
              className="w-2/4 lg:w-1/2 xl:w-full img-fluid"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-10 lg:px-22 mt-8 md:mt-0">
            <h2 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-[#21313c] mb-1 sm:mb-2 ">
              Sign in to FreshCart
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Welcome to FreshCart! Enter your email to get{" "}
              <br className="hidden sm:block " /> started.
            </p>
            <form onSubmit={handleSubmit} action="" className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange}
                className=" w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
              <input
                type="password"
                name="password"
                placeholder="*****"
                value={loginData.password}
                onChange={handleChange}
                className="  w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
              <div className="flex justify-between items-center fold-medium text-grey-600 ">
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" id="remember" />
                  <p className="text-gray-600  text-sm sm:text-base">
                    Remember me{" "}
                  </p>
                </div>
                <p className="text-gray-600  text-sm sm:text-base">
                  Forgot Password ?{" "}
                  <span>
                    <Link
                      to="/reset"
                      className="text-[#0aad0a]  text-sm sm:text-base"
                    >
                      {" "}
                      Reset it{" "}
                    </Link>
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0aad0a]  text-white rounded-lg hover:bg-green-700 transition border-gray-400"
              >
                Sign In
              </button>
              <p className="text-gray-600  text-sm sm:text-base">
                Don’t have an account?{" "}
                <span>
                  <Link
                    to="/registration"
                    className="text-[#0aad0a]  text-sm sm:text-base"
                  >
                    Sign up
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
