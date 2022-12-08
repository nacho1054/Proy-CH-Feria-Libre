import "./Brand.css"
import {Link} from "react-router-dom";

const Brand = () => {
    return(
        <div className="Brand">
            <Link to={`/`} className="LinkToHome">
                <h1 className="Brand_Feria">Feria Libre</h1>
            </Link>
        </div>
    );
}

export default Brand;