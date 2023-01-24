import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";

export function signInApi() {
  const auth = getAuth(provider);

  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log(payload);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(payload);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = payload.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
}

// auth.signInWithPopup(provider).then((payload) => {

// });
// .catch((error) =>  {
//   const errorCode=error.code;
//   alert(errorCode);
// })
