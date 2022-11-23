import SearchBar from "../SearchBar/SearchBar";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import BasicMenu from "../BasicMenu/BasicMenu";


const NavBar = () => {
    return(
        <nav className="NavBar">
            <Brand />
            <SearchBar />
            <BasicMenu />
            <CartWidget />
        </nav>
    )
}

export default NavBar;