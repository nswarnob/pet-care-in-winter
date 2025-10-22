import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showpassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.password?.value;
    const email = e.target.email?.value;
    const name = e.target.name?.value;
    console.log(email, password, name);

    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regEx.test(password)) {
      toast.warning(
        "Password must be at least 6 characters long and include uppercase, lowercase, and a number."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged In Success.");
      })
      .catch((error) => {
        toast.error(error.messasge);
      });
  };
  return (
    <div className="w-full md:pt-35 pt-20 bg-base-200 min-h-screen">
      <div className="card mx-auto  bg-base-100 border border-primary w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body relative">
          <form onSubmit={handleSignup}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <span
                className="absolute top-50 right-12 cursor-pointer"
                onClick={() => setShowPassword(!showpassword)}
              >
                {showpassword ? <FaEye size={21} /> : <FaEyeSlash size={21} />}
              </span>

              <button
                type="submit"
                className="btn btn-neutral bg-secondary border border-primary mt-4"
              >
                Signup
              </button>
              <p className="text-center text-text text-md font-bold">
                Have an account?{" "}
                <Link to={"/login"} className="text-secondary">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
