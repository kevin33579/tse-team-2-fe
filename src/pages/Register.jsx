import Input from "../components/input";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "./Login.css";

const Register = () => {
  return (
    <div>
      <div className="login__page">
        <div className="login__container">
          <Navbar />
          <div className="form__container">
            <h1 className="login__title">Lets Join our course!</h1>
            <h2 className="login__subtext">Please register first</h2>
            <Input placeholder={"Name"} inputName={"name"} />
            <Input placeholder={"Email"} inputName={"email"} />
            <Input placeholder={"Password"} inputName={"password"} />
            <Input
              placeholder={"Confirm Password"}
              inputName={"confirmpassword"}
            />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                className="button__login"
                label="Sign Up"
                variant="primary"
                onClick={() => alert("Sign Up clicked")}
              />
            </div>
            <div className="signup__text">
              Have account? <a href="#"> Login here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
