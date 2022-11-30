import '../../css/style.css';
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';

export const SignIn = () => {
    const { SignInGoogle, signed } = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await SignInGoogle()
    }

    if (!signed) {
        return (
            <div className="container">
                <h1>Acesse sua conta</h1>
                <button type="button" className="btn btn-outline-info button" onClick={loginGoogle}>
                    Entrar com o google
                </button>
            </div>
        )
    }
    else{
        return <Navigate to="/home"/>
    }
}