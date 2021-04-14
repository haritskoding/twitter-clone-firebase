import { signout } from "../../../service/auth.service"
import useAuthProvider from "../../../shared/hook/useAuthProvider"

const useSignOut = () => {
    const [authState, authDispatch] = useAuthProvider();
    const SignOute = async (provider) => {
        await signout(provider)
        authDispatch({ type: "UPDATE_AUTH", paylod: false })
    }

    return SignOute;
}

export default useSignOut;