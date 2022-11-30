import { Link } from "react-router-dom";
import '../../css/style.css';
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext } from "react";

export function LerArquivo (){
    const {user, singOut } = useContext(AuthGoogleContext)
    let userLogado = JSON.parse(user)
    console.log(userLogado);
    return (
        <div>
            <nav className="navbar navbar-info bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Horarios do Cimol</Link>
                    <span >
                        <p id="userName">{userLogado.displayName}</p>
                        <button type="button" className="btn btn-outline-light sair" onClick={()=>{singOut()}}>Sair</button>
                    </span>

                </div>
            </nav>
            <div className="container">
                <h1>Ler Arquivo</h1>
                <Link to="/home">Voltar</Link>
                <input className="btn btn-info" type="file" onChange={()=>{}}/>
            </div>
        </div>
    )
}