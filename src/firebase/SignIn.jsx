import { fbApp } from "./firebase-project-config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";
const auth = getAuth(fbApp);
export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Button variant="outlined" onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
}
