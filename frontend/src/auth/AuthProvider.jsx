// src/AuthProvider.jsx
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-zof0rdleayrqz520.us.auth0.com"
      clientId="UQWLhykP3i7bzwYO1CewdsjmJeMckrLF"
      redirectUri={window.location.origin} // Can also be set to process.env.REACT_APP_AUTH0_CALLBACK_URL
      // You can use the callback URL here if needed
      // callbackUrl={process.env.REACT_APP_AUTH0_CALLBACK_URL}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
