import React from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';

interface Props {
  clientID: string;
  preLogin: () => void;
  failureHandler: (error: string) => void;
  label: string;
}

function GoogleAuth({ clientID, preLogin, failureHandler, label }: Props) {
  function responseGoogle(googleUser: any): void {
    const { id_token } = googleUser.getAuthResponse(true);
    const googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
    // Make user login in your system
    // login success tracking...
  }
  return (
    <GoogleLoginButton
      classNames="google-button-wrapper"
      responseHandler={responseGoogle}
      clientConfig={{ client_id: clientID }}
      preLogin={preLogin}
      failureHandler={failureHandler}
    >
      <button type="button" className="google-button">
        <img src="/images/google_logo.svg" alt="Google Logo" />
        {label}
      </button>
    </GoogleLoginButton>
  );
}

export default GoogleAuth;
