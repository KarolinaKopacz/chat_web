import firebase from "../firebase/firebase.config";

const Authentication = {
  // Sign in Anonymously
  singin: async () => {
    return firebase.auth
      .signInAnonymously()
      .then((response) => {
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  },

  logout: async () => {
    return firebase.auth
      .signOut()
      .then(() => {
        return false;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  },
};

export default Authentication;
