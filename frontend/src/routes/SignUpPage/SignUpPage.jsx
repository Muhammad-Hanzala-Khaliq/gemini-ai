import { SignUp } from "@clerk/clerk-react";
import "./SignUpPage.css";

const SignUpPage = () => (
  <div className="signupPage">
    <SignUp path="/sign-up" signInUrl="sign-in" />
  </div>
);

export default SignUpPage;
