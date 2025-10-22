import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(password, email);
  };

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
                type="password"
                name="password"
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
