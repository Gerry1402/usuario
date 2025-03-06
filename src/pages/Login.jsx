import { loginWithGoogle } from "../services/auth"

const Login = () => {

    return <>
        <button onClick={() => loginWithGoogle()}>Google</button>
    </>
}

export default Login;