import { fbApp } from "./firebase-project-config";
import { getAuth } from "firebase/auth";
import { Button } from "@mui/material";

const auth = getAuth(fbApp);

export default function SignOut() {
  return (
    auth.currentUser && (
      <>
        <img
          style={{ height: "100%", borderRadius: "50%" }}
          src={getAuth().currentUser.photoURL}
          alt="Profile Pic"
        />
        {getAuth().currentUser.displayName}
        <Button variant="outlined" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      </>
    )
  );
}
