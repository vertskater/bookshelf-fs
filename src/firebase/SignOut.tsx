import { auth } from "./firebaseInit";
//import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

//const auth = getAuth(app);
export default function SignOutButton() {
  const signOutWithGoogle = () => {
    signOut(auth);
  };
  return (
    auth.currentUser && (
      <>
        <img
          style={{ height: "100%", borderRadius: "50%" }}
          src={auth.currentUser.photoURL!}
          alt="Profile Pic"
          referrerPolicy="no-referrer"
        />
        <span
          style={{
            fontSize: "1.2em",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          {auth.currentUser.displayName}
        </span>
        <Button variant="outlined" onClick={signOutWithGoogle}>
          Sign out
        </Button>
      </>
    )
  );
}
