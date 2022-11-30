import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import '../../css/style.css';

export const Home = () => {
    const {user, singOut } = useContext(AuthGoogleContext)
    let userLogado = JSON.parse(user)
    console.log(userLogado);
    return (
        <div>
            <nav className="navbar navbar-info bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Horarios do Cimol</Link>
                    <span>{userLogado.displayName}
                        <button type="button" className="btn btn-info" onClick={()=>{singOut()}}>Sair</button>
                    </span>

                </div>
            </nav>
            <div className="container">
                <h1>Horarios Cadastrados</h1> 
                <button type="button" className="btn btn-info"><Link to="/lerarquivo">Ler Arquivo</Link></button>
            </div>
        </div>
    )
}