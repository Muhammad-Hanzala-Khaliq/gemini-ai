import { SignedOut, SignIn, SignInButton } from "@clerk/clerk-react";
import "./SignInPage.css";

const SignInPage = () => (
  <div className="signinPage">
    <SignIn
      path="/sign-in"
      signUpUrl="/sign-up"
      forceRedirectUrl="/dashboard"
    />
  </div>
);

export default SignInPage;
