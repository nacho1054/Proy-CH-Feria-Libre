import Home from "./Home/Home"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"

const Router = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/category/:idCategory" element={<ItemListContainer />}></Route>
                <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
                <Route path="/*" element={<div>404 not found</div>}></Route> 
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router;