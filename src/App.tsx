import React, { useState } from "react";
import "./App.css";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

import { createPreferences } from "./graphql/mutations";
import { listPreferences } from "./graphql/queries";

import {
  PageHeader
} from "antd";
import ApplicationRoutes from "./config/ApplicationRoutes";

Amplify.configure(awsconfig);



/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const AuthStateApp: React.FunctionComponent = () => {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <PageHeader
        className="site-page-header"
        
        title="RevolutionRealEstate"
        subTitle="created by: 3 re gurus"
      />
      <ApplicationRoutes />
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;
