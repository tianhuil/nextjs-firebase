import { GoogleAuthProvider, signOut } from "firebase/auth";
import type { NextPage } from "next";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../comp/auth";

export const defaultUiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/login",
  tosUrl: "/terms-of-service",
  privacyPolicyUrl: "/privacy-policy",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

const Login: NextPage = () => {
  const [signIn, user, loading, error] = useSignInWithGoogle(auth);

  const display = () => {
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    if (user)
      return (
        <p>
          Logged In as {user.user.displayName} ({user.user.email}) via{" "}
          {user.providerId}{" "}
          <button onClick={() => signOut(auth)}>Signout</button>
        </p>
      );
    return (
      <>
        <p>Please sign-in:</p>
        <button onClick={() => signIn()}> Sign In </button>
      </>
    );
  };

  return (
    <main>
      <h1>My App</h1>
      {display()}
    </main>
  );
};

export default Login;
