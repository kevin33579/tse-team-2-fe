import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import 'typeface-montserrat';
import "./ResetPassword.css";

const ResetPasswordEmail = () => {
  return (
    <>
      <Navbar />
      <div className="reset-password-page">
        <div className="reset-password-container">
          <h2 className="reset-password-title">Reset Password</h2>
          <p className="reset-password-subtext">
            Send OTP code to your email address
          </p>

          <Input placeholder="Email" inputName="email" />

          <div className="reset-password-actions">
            <Button
              className="btn cancel"
              label="Cancel"
              variant="secondary"
              onClick={() => console.log("Cancel clicked")}
            />
            <Button
              className="btn confirm"
              label="Confirm"
              variant="primary"
              onClick={() => console.log("Confirm clicked")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordEmail;
