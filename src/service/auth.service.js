import { firebase } from "../config/firebase";

const register = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            return result;
        })
}

const signout = async () => {
    await firebase.auth().signOut();
}

export { register, signout };