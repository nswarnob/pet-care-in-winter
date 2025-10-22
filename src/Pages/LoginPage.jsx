import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link} from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const [showpassword, setShowPassword] = useState(false);
 const { signIn,setUser, resetPass } = useContext(AuthContext);
//  const location = useLocation();
//   const navigate = useNavigate();

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

    signIn(password, email).then((result)=>{
       setUser(result.user);
       toast.success("Logged In Success!");
    }).catch((error)=>{
      toast.error(error.message);
    })
   
  };

   const handleForget = (e)=>{
  e.preventDefault()
  const resetEmail = e.target.email.value;
   resetPass(resetEmail).then(()=>{
    toast.warning("Link Sent to your email!")
   }).catch((error)=>{
    toast.error(error.message);
   })
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
                <a className="link link-hover text-sm " onClick={handleForget} >Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral bg-secondary border border-primary mt-4"
              >
                Login
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
