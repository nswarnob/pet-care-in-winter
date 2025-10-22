import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    console.log(email, password, name);
  };
  return (
    <div className="w-full md:pt-35 pt-20 bg-base-200 min-h-screen">
      <div className="card mx-auto  bg-base-100 border border-primary w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
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
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="name"
                className="input"
                placeholder="Password"
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
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
