import Input from "../components/input";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="login__page">
        <div className="login__container">
          <Navbar />
          <div className="form__container">
            <h1 className="login__title">Welcome Back!</h1>
            <h2 className="login__subtext">Please login first</h2>
            <Input placeholder={"Email"} inputName={"email"} />
            <Input placeholder={"Password"} inputName={"password"} />
            <div className="forgot__password">
              Forgot Password? <a href="#">Click Here</a>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                className="button__login"
                label="Login"
                variant="primary"
                onClick={() => alert("Login clicked")}
              />
            </div>
            <div className="signup__text">
              Don’t have an account? <a href="#"> Sign Up here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
