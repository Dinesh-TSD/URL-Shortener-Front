import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../authenticate/authenticate";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const closemeg = () =>
    toast(" Login Success", {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
    });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Please enter email";
      }

      if (!values.password) {
        errors.password = "Please enter password";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        //post method create new Account
        let res = await axios.post(
          "/api/v1/login",
          values
        );
        localStorage.setItem("token", res.data.token);
        navigate("/portal/dashboard");
        closemeg();
      } catch (error) {
        console.log(error);
      }
    },
  });

  React.useEffect(() => {
    if (isAuthenticated()) {
      navigate("/portal/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div className="head ">Dinesh Soft Tech</div>
      <div className="lg ">
        <form className="form-bg  mt-3" onSubmit={formik.handleSubmit}>
          <h1>Login</h1>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter yor email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("email").touched && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("password").touched &&
              formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <Link className="btn forgot mt-3" to="/forgot/password">
                Forgot Password ?
              </Link>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <input
                type="submit"
                className="btn btn-primary mt-3"
                value={"Login"}
              />
            </div>
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <br></br>
              <p className="forgot">Don't have an account ? Click Register</p>
              <Link className="btn btn-primary forgot mt-3" to="/register">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
