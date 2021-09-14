import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { login } from "../../actions/userActions";

function LoginScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div>
      <div className="container col-md-8 mt-5">
        <div className="content-section">
          <div className="form">
            <div className="my-5"></div>
            <form onSubmit={submitHandler}>
              <h2 className="text-center">Welcome back</h2>
              <h3 className="m-3 text-center">Login here</h3>
              {loading && <Loader />}
              <div className="form-group m-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div className="form-group m-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              
              <div className="text-center">
                <button className="btn btn-primary m-5" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="border-top p-3">
            <small className="text-muted">
              Not a member yet? <Link to={"/register"}>Sign Up</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
