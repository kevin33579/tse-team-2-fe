import FormInput from "../components/FormInput";
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
          <h2 className="reset-password-title">Create Password</h2>
          <br />
          <br />
          <br />
          <FormInput placeholder="New Password" inputName="Password" />
          <FormInput placeholder="Confirm New Password" inputName="ConfirmPassword" />

          <div className="reset-password-actions">
            <Button
              className="btn cancel"
              label="Cancel"
              variant="secondary"
              onClick={() => alert("Cancel clicked")}
            />
            <Button
              className="btn confirm"
              label="Confirm"
              variant="primary"
              onClick={() => alert("Confirm clicked")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordEmail;
