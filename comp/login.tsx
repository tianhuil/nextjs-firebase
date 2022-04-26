import { Auth, GoogleAuthProvider, signOut as _signOut } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import superjson from "superjson";
import { auth } from "./auth";

export const defaultUiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/login",
  tosUrl: "/terms-of-service",
  privacyPolicyUrl: "/privacy-policy",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

const useAuth = (auth: Auth) => {
  const [signIn, _user, loading, error] = useSignInWithGoogle(auth);
  const getUser = (): typeof _user => {
    if (typeof window === "undefined") return _user;
    const __userStr = window.localStorage.getItem("__user");
    if (!__userStr) return _user;
    return superjson.parse(__userStr);
  };
  const signOut = () => {
    typeof window !== "undefined" && window.localStorage.removeItem("__user");
    _signOut(auth);
  };
  if (
    _user !== undefined &&
    typeof window !== "undefined" &&
    !window.localStorage.getItem("__user")
  ) {
    window.localStorage.setItem("__user", superjson.stringify(_user));
  }
  return [signIn, getUser(), loading, error, signOut] as const;
};

const Login = () => {
  const [signIn, user, loading, error, signOut] = useAuth(auth);

  const display = () => {
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    if (user)
      return (
        <p>
          Logged In as {user.user.displayName} ({user.user.email}) via{" "}
          {user.providerId} <button onClick={() => signOut()}>Signout</button>
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
