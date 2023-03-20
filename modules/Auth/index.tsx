import { Box } from "@mui/material";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthScreen = () => {
  const [authScreen, setAuthScreen] = useState("signIn");

  return (
    <Box>
    {/* <Box sx={{ background: '#c3c3c3', height: '100vh' }}> */}
      {authScreen === "signIn" ? (
        <SignIn setAuthScreen={setAuthScreen} />
      ) : (
        <SignUp setAuthScreen={setAuthScreen} />
      )}
    </Box>
  );
};
