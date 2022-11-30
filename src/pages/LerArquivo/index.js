import { Link } from "react-router-dom";
import '../../css/style.css';

export function LerArquivo (){
    return(
        <div>
            <nav className="navbar navbar-info bg-info">
                <div className="container-fluid">                    
                    <Link className="navbar-brand" to="/home">Horarios do Cimol</Link>
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