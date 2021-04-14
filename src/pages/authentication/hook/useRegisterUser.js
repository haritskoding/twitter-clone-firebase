import { register } from "../../../service/auth.service"
import useAuthProvider from "../../../shared/hook/useAuthProvider"

const useRegisterUser = () => {
    const [authState, authDispatch] = useAuthProvider();
    const registerUser = async (provider) => {
        const res = await register(provider)
        authDispatch({ type: "UPDATE_AUTH", paylod: true })
    }

    return registerUser;
}

export default useRegisterUser;