import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const [showpassword, setShowPassword] = useState(false);
  const { signIn, setUser, resetPass, signInWithGoogle  } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  
   const navigate = useNavigate();
   const location = useLocation();

   console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(password, email);

    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regEx.test(password)) {
      toast.warning(
        "Password must be at least 6 characters long and include uppercase, lowercase, and a number."
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged In Success!");
         navigate(`${location.state? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForget = (e) => {
    e.preventDefault();
    if (!email) {
      toast.warning("Please enter your email first.");
      return;
    }
    try {
      resetPass(email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/user-not-found") {
        toast.warning("No user found with that email.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  };


 const handleGoogleLogin =()=>{
  signInWithGoogle()
    .then((result) => {
      setUser(result.user);
      toast.success(`Welcome, ${result.user.displayName}!`);
    })
    .catch((error) => {
      toast.error(`Failed! ${error.message}`);
    });
 }




  return (
    <div className="w-full md:pt-35 pt-20 bg-base-200 min-h-screen">
      <div className="card mx-auto  bg-base-100 border border-primary w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="label">Password</label>
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <span
                className="absolute top-33 right-12 cursor-pointer"
                onClick={() => setShowPassword(!showpassword)}
              >
                {showpassword ? <FaEye size={21} /> : <FaEyeSlash size={21} />}
              </span>

              <div>
                <a className="link link-hover text-sm " onClick={handleForget}>
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral bg-secondary border border-primary mt-4"
              >
                Login
              </button>


              {/* Google */}
              <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="text-center text-text text-md font-bold">
                New here?{" "}
                <Link to={"/signup"} className="text-secondary">
                  Signup
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
