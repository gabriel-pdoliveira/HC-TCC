import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from ".";
import { SignIn, Home, LerArquivo } from "../pages";



export const Rota = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/home" element={<PrivateRoutes/>}>
                    <Route path="/home" element={<Home/>}/>
                </Route>
                <Route path="/lerarquivo" element={<PrivateRoutes/>}>
                    <Route path="/lerarquivo" element={<LerArquivo/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}